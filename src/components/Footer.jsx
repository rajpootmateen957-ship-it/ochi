export default function Footer() {
  return (
    <footer className="w-full bg-[#e9e9e9] px-6 md:px-12 py-16 overflow-hidden">

      {/* TOP */}
      <div className="flex flex-col lg:flex-row justify-between gap-10">

        {/* LEFT TEXT */}
        <div>
          <h1 className="font-black text-[#111] leading-[0.9] 
          text-[clamp(40px,7vw,110px)]">
            EYE-
            <br />
            OPENING
          </h1>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full lg:w-auto">

          <h1 className="font-black text-[#111] 
          text-[clamp(40px,7vw,110px)] lg:text-right">
            PRESENTATIONS
          </h1>

          {/* CONTENT */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 mt-12 text-[#111]">

            {/* SOCIAL */}
            <div>
              <p className="mb-3">S:</p>
              <div className="flex flex-col gap-1 underline">
                <a href="#">Instagram</a>
                <a href="#">Behance</a>
                <a href="#">Facebook</a>
                <a href="#">Linkedin</a>
              </div>
            </div>

            {/* LOCATION */}
            <div>
              <p className="mb-3">L:</p>

              <div className="underline mb-5">
                <p>202-1965 W 4th Ave</p>
                <p>Vancouver, Canada</p>
              </div>

              <div className="underline mb-5">
                <p>30 Chukarina St</p>
                <p>Lviv, Ukraine</p>
              </div>

              <p className="mb-2">E:</p>
              <a href="#" className="underline">
                hello@ochi.design
              </a>
            </div>

            {/* MENU */}
            <div>
              <p className="mb-3">M:</p>
              <div className="flex flex-col gap-1 underline">
                <a href="#">Home</a>
                <a href="#">Services</a>
                <a href="#">Our work</a>
                <a href="#">About us</a>
                <a href="#">Insights</a>
                <a href="#">Contact us</a>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-16 gap-6 text-[#777] text-sm">

        <div className="text-2xl font-semibold text-[#111]">
          ochi
        </div>

        <div>
          © ochi design 2026.{" "}
          <span className="underline cursor-pointer">Legal Terms</span>
        </div>

        <div>
          Website by Obys
        </div>

      </div>
    </footer>
  );
}