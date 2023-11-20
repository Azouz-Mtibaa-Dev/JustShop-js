import { AuthenticationContext } from "@/pages/_app"
import Link from "next/link"
import { useRouter } from "next/router"
import { useContext } from "react"
export default function Navbar() {
    const { AccessToken, setAccessToken, username, setUsername } = useContext(AuthenticationContext)
    const router = useRouter()
    const logout = () => {
        fetch('/auth/logoutSession').then(res => res.text()).then(data => {
            setAccessToken(null)
            setUsername(null)
            router.push('/login')
        })
    }
    return (
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <span className="ml-3 text-xl cursor-pointer">
                        <Link href={'/shop'}>
                            <span className="flex">
                                <img
                                    src="/images/logo.png"
                                    alt="Logo"
                                    className="w-30  h-20 text-white p-2"
                                />

                            </span>
                        </Link>
                    </span>
                </div>

                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-lg justify-center">
                    <span className="mr-5 text-2xl font-black hover:text-gray-900">
                        <Link href={'/'}>Home</Link>
                    </span>

                    <span className="mr-5 text-2xl font-black hover:text-gray-700">
                        <Link href={'/shop'}>Shop</Link>
                    </span>
                    <span className="mr-5 text-2xl font-black hover:text-gray-700">
                        <Link href={'/fournniseur'}>Fournissseur</Link>
                    </span>
                    <span className="mr-5 text-2xl font-black hover:text-gray-900">
                        <Link href={'/contact'}>Contact</Link>
                    </span>
                    {/* <input
                        type="text"
                        placeholder="Search..."
                        style={{ border: '1px solid' }}
                        className="border-gray-500 p-1 rounded-md block text-lg font-medium leading-6 text-gray-900"
                    /> */}
                </nav>

                {!AccessToken ?
                    <>
                        <span className="block text-sm font-medium leading-6 mr-2" >
                            <Link href={'/login'}>
                                <button className="group rounded-2xl h-12 w-24 bg-blue-500 font-bold text-sm
                                    text-white relative overflow-hidden ">
                                    Login
                                    <div className="absolute duration-300 inset-0 w-full h-full transition-all scale-0 group-hover:scale-100 group-hover:bg-white/30 rounded-2xl">
                                    </div>
                                </button>

                            </Link>
                        </span>

                        <span className="block text-sm font-medium leading-6" >
                            <Link href={'/register'}>
                                <button className="group rounded-2xl h-12 w-24 bg-blue-500 font-bold text-sm
                                    text-white relative overflow-hidden ">
                                    Sign up
                                    <div className="absolute duration-300 inset-0 w-full h-full transition-all scale-0 group-hover:scale-100 group-hover:bg-white/30 rounded-2xl">
                                    </div>
                                </button>
                            </Link>
                        </span>
                    </> :
                    <>
                        <span className="block text-sm font-medium leading-6 mr-2" >
                            <button className="group rounded-2xl h-12 w-24 bg-blue-500 font-bold text-sm
                              text-white relative overflow-hidden">
                                {username}
                                <div className="absolute duration-300 inset-0 w-full h-full transition-all scale-0 group-hover:scale-100 group-hover:bg-white/30 rounded-2xl">
                                </div>
                            </button>

                        </span>

                        <span className="block text-sm font-medium leading-6" >
                            <span onClick={logout}>
                                <button className="group rounded-2xl h-12 w-24 bg-red-500 font-bold text-sm
                                    text-white relative overflow-hidden ">
                                    Log out
                                    <div className="absolute duration-300 inset-0 w-full h-full transition-all scale-0 group-hover:scale-100 group-hover:bg-white/30 rounded-2xl">
                                    </div>
                                </button>
                            </span>
                        </span>
                    </>
                }
            </div>
        </header>

    )
}
