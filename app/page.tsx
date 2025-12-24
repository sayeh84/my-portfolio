import {
  FaTiktok,
  FaYoutube,
  FaFacebook,
  FaInstagram,
  FaBlog,
} from 'react-icons/fa'
import Image from 'next/image'

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      {/* Profilbild */}
      <img
        src="/profile.JPG"
        alt="Min profilbild"
        className="w-100 h-120  mb-6"
      />

      {/* Sociala medier */}
      <div className="flex flex-col space-y-4 w-full max-w-xs">
        <a
          href="https://www.tiktok.com/@someyasayeh"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center space-x-2 bg-black text-white py-2 rounded-lg hover:bg-pink-500 transition"
        >
          <FaTiktok size={24} /> <span>TikTok</span>
        </a>

        <a
          href="https://www.youtube.com/channel/UCVt5vI6JASDsxGktxysW8Bg"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center space-x-2 bg-black text-white py-2 rounded-lg hover:bg-red-600 transition"
        >
          <FaYoutube size={24} /> <span>YouTube</span>
        </a>

        <a
          href="https://www.facebook.com/hanna.elisa.5/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center space-x-2 bg-black text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          <FaFacebook size={24} /> <span>Facebook</span>
        </a>

        <a
          href="https://www.instagram.com/someya_sayeh_boukris/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center space-x-2 bg-black text-white py-2 rounded-lg hover:bg-pink-400 transition"
        >
          <FaInstagram size={24} /> <span>Instagram</span>
        </a>

        <a
          href="https://traveltogether.nu/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center space-x-2 bg-black text-white py-2 rounded-lg hover:bg-green-600 transition"
        >
          <FaBlog size={24} /> <span>Blogg</span>
        </a>
      </div>
    </main>
  )
}
