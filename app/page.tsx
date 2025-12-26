import {
  FaTiktok,
  FaYoutube,
  FaFacebook,
  FaInstagram,
  FaGlobe,
} from 'react-icons/fa'

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 text-gray-900">
      {/* Profilbild */}
      <img
        src="/bild1.JPG"
        alt="Profilbild"
        className="w-32 h-32 rounded-full object-cover mb-4"
      />

      {/* Username */}
      <h2 className="text-lg font-semibold mb-6">@someya_sayeh_boukris</h2>

      {/* Ikoner */}
      <div className="flex space-x-6 text-2xl">
        <a
          href="https://www.tiktok.com/@someyasayeh"
          target="_blank"
          className="transition transform hover:scale-110 active:scale-95"
        >
          <FaTiktok />
        </a>

        <a
          href="https://www.youtube.com/channel/UCVt5vI6JASDsxGktxysW8Bg"
          target="_blank"
          className="transition transform hover:scale-110 active:scale-95"
        >
          <FaYoutube />
        </a>

        <a
          href="https://www.facebook.com/hanna.elisa.5/"
          target="_blank"
          className="transition transform hover:scale-110 active:scale-95"
        >
          <FaFacebook />
        </a>

        <a
          href="https://www.instagram.com/someya_sayeh_boukris/"
          target="_blank"
          className="transition transform hover:scale-110 active:scale-95"
        >
          <FaInstagram />
        </a>

        <a
          href="https://traveltogether.nu/"
          target="_blank"
          className="transition transform hover:scale-110 active:scale-95"
        >
          <FaGlobe />
        </a>
      </div>
    </main>
  )
}
