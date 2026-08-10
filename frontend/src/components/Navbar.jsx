export default function Navbar({scrolled, mainLinks, setMenuOpen}){
    

    return(
        <nav className={`fixed inset-x-0 top-0 z-[999] transition-[padding] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] `}>
        <div
          className={`
            relative mx-auto flex items-center h-14 overflow-hidden
            transition-[max-width,border-radius,padding,gap,background-color,backdrop-filter,box-shadow] 
            duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
            ${scrolled
              ? 'max-w-[56rem] rounded-full bg-black/60 backdrop-blur-[1.5rem] py-1.5 pl-6 pr-1.5 shadow-[0_1px_4px_#0003,0_7px_24px_#0000001a] mt-3'
              : 'max-w-full rounded-none bg-[#1D212B] py-4 px-6 lg:px-12'
            }
            max-lg:max-w-full max-lg:rounded-none max-lg:bg-[#1D212B] max-lg:py-3.5 max-lg:px-5
          `}
        >

          {/* === Логотип по центру (desktop) === */}
          <a
            href="/"
            className={`
              text-white font-bold tracking-tight whitespace-nowrap transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
              lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 z-[1]
              text-xl lg:text-2xl
              ${scrolled ? 'lg:scale-[0.85]' : 'lg:scale-100'}
            `}
            style={{ fontFamily: 'Arial, sans-serif' }}
          >
            Horma+
          </a>

          {/* Левые ссылки */}
          <div className="hidden lg:flex flex-1 items-center group/left">
            {mainLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-white text-sm font-medium px-3 py-2 transition-opacity duration-150 group-hover/left:opacity-50 hover:!opacity-100"
              >
                {label}
              </a>
            ))}
          </div>

          {/* CTA справа */}
          <div className="flex flex-1 items-center justify-end gap-2">
            <a
              href="#contact"
              className="hidden lg:inline-flex px-4 py-2 rounded-full bg-white text-[#1D212B] text-sm font-medium transition-all duration-200 hover:opacity-90 active:scale-95"
            >
              Priority Access
            </a>
            
            <button
              className="w-10 h-10 flex items-center justify-center"
              onClick={() => setMenuOpen(true)}
              aria-label="Menu"
            >
              {/* 9-dot SVG */}
              <svg width="20" height="22" viewBox="0 0 20 22" fill="none">
              <circle cx="2" cy="2" r="2" fill="white" />
              <circle cx="10" cy="2" r="2" fill="white" />
              <circle cx="18" cy="2" r="2" fill="white" />
              <circle cx="2" cy="11" r="2" fill="white" />
              <circle cx="10" cy="11" r="2" fill="white" />
              <circle cx="18" cy="11" r="2" fill="white" />
              <circle cx="2" cy="20" r="2" fill="white" />
              <circle cx="10" cy="20" r="2" fill="white" />
              <circle cx="18" cy="20" r="2" fill="white" />
            </svg>
            </button>
          </div>
        </div>
      </nav>
    )
}