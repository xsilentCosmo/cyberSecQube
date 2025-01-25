import EncryptBtn from '../EncryptButton';

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/cybg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content */}
      <div className="text-center relative z-10 px-4">
        <h1 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-500 to-pink-500">
          Your Path to <span className="bg-gradient-to-r from-cyan-400 via-indigo-500 to-pink-500 bg-clip-text">Cybersecurity Mastery</span>
        </h1>
        <p className="mt-4 text-base md:text-xl text-balance max-w-2xl mx-auto">
          Master the art of cybersecurity with cutting-edge training programs designed for the digital age. Learn from experts and secure your future today!
        </p>
        <div className="mt-8">
          <a
            href="/courses"
            className="px-8 py-3"
          >
            <EncryptBtn />
          </a>
        </div>
      </div>

      {/* Floating Shield Icon */}
      {/* <div className="absolute right-10 top-10 opacity-20 transform rotate-12 animate-pulse">
          <img src="/shield-icon.svg" alt="Shield Icon" className="w-48 h-48" />
        </div> */}
    </section>
  );
}
