import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowDownRight,
  ArrowUpRight,
  Bath,
  BedDouble,
  CarFront,
  ChevronDown,
  Clock3,
  Coffee,
  Droplets,
  Menu,
  MessageCircle,
  Navigation,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Tv,
  UtensilsCrossed,
  Wifi,
  Wind,
  X,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const WHATSAPP = 'https://wa.me/50498881975'
const MAP_LINK = 'https://maps.app.goo.gl/PBfYwGXhe4ztUwus6'

const unsplash = (id: string, width = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=88`

type Asset = {
  local: string
  preview: string
  alt: string
}

type Room = {
  beds: number
  eyebrow: string
  title: string
  description: string
  size: string
  room: Asset
  bathroom: Asset
  gallery: string[]
}

const asset = (local: string, preview: string, alt: string): Asset => ({ local, preview, alt })

const heroSlides: Asset[] = [
  asset(
    '/assets-hotel/fachada-principal.jpg',
    unsplash('photo-1566073771259-6a8506099945', 2200),
    'Fachada de un hotel boutique al atardecer',
  ),
  asset(
    '/assets-hotel/fachada-principal-1.jpg',
    unsplash('photo-1551882547-ff40c63fe5fa', 2200),
    'Exterior cálido de un hotel con iluminación dorada',
  ),
  asset(
    '/assets-hotel/fachada-principal-2.jpg',
    unsplash('photo-1542314831-068cd1dbfeeb', 2200),
    'Arquitectura elegante de un hotel boutique',
  ),
]

const rooms: Room[] = [
  {
    beds: 1,
    eyebrow: 'Íntima y serena',
    title: 'Habitación Sencilla',
    description: 'Un refugio silencioso para descansar, trabajar y despertar con calma.',
    size: '1 cama · baño privado',
    room: asset('/assets-hotel/hab-sencilla-1cama-1.jpg', unsplash('photo-1631049307264-da0ec9d70304'), 'Habitación sencilla con una cama y luz natural'),
    bathroom: asset('/assets-hotel/bano-privado-hab1cama-1.jpg', unsplash('photo-1600566753190-17f0baa2a6c3'), 'Baño privado contemporáneo de la habitación sencilla'),
    gallery: [
      '/assets-hotel/hab-sencilla-1cama-2.jpg',
      '/assets-hotel/hab-sencilla-1cama-3.jpg',
      '/assets-hotel/hab-sencilla-1cama-4.jpg',
      '/assets-hotel/hab-sencilla-1cama-5.jpg',
      '/assets-hotel/hab-sencilla-1cama-6.jpg',
      '/assets-hotel/bano-privado-hab1cama-2.jpg',
      '/assets-hotel/bano-privado-hab1cama-3.jpg',
      '/assets-hotel/bano-privado-hab1cama-4.jpg',
    ],
  },
  {
    beds: 2,
    eyebrow: 'Para compartir',
    title: 'Habitación Doble',
    description: 'Dos camas, amplitud y todo lo necesario para viajar acompañado.',
    size: '2 camas · baño privado',
    room: asset('/assets-hotel/hab-doble-2camas-1.jpg', unsplash('photo-1590490360182-c33d57733427'), 'Habitación doble con dos camas'),
    bathroom: asset('/assets-hotel/bano-privado-hab2cama-1.jpg', unsplash('photo-1552321554-5fefe8c9ef14'), 'Baño privado de la habitación doble'),
    gallery: [
      '/assets-hotel/hab-doble-2camas-2.jpg',
      '/assets-hotel/hab-doble-2camas-3.jpg',
    ],
  },
  {
    beds: 3,
    eyebrow: 'Para escapadas',
    title: 'Habitación Triple',
    description: 'La opción equilibrada para familia o amigos que buscan su propio ritmo.',
    size: '3 camas · baño privado',
    room: asset('/assets-hotel/hab-triple-3camas-1.jpg', unsplash('photo-1566665797739-1674de7a421a'), 'Habitación triple amplia y confortable'),
    bathroom: asset('/assets-hotel/bano-privado-hab3cama-1.jpg', unsplash('photo-1600607687920-4e2a09cf159d'), 'Baño privado de la habitación triple'),
    gallery: [
      '/assets-hotel/hab-triple-3camas-2.jpg',
      '/assets-hotel/hab-triple-3camas-3.jpg',
      '/assets-hotel/hab-triple-3camas-4.jpg',
      '/assets-hotel/bano-privado-hab3cama-2.jpg',
    ],
  },
  {
    beds: 4,
    eyebrow: 'Para todos',
    title: 'Habitación Cuádruple',
    description: 'Más espacio para reunirse, descansar y disfrutar Copán sin prisas.',
    size: '4 camas · baño privado',
    room: asset('/assets-hotel/hab-cuadruple-4camas-1.jpg', unsplash('photo-1566665797739-1674de7a421a'), 'Habitación cuádruple para grupos y familias'),
    bathroom: asset('/assets-hotel/bano-privado-hab4cama-1.jpg', unsplash('photo-1551776235-dde6d482980b'), 'Baño privado de la habitación cuádruple'),
    gallery: [
      '/assets-hotel/hab-cuadruple-4camas-2.jpg',
      '/assets-hotel/hab-cuadruple-4camas-3.jpg',
      '/assets-hotel/bano-privado-hab4cama-2.jpg',
      '/assets-hotel/bano-privado-hab4cama-3.jpg',
    ],
  },
]

const galleryPreviews = [
  'photo-1600607687939-ce8a6c25118c',
  'photo-1600566753086-00f18fb6b3ea',
  'photo-1598928506311-c55ded91a20c',
  'photo-1600210492486-724fe5c67fb0',
  'photo-1618220179428-22790b461013',
  'photo-1617104678098-de229db51175',
  'photo-1586023492125-27b2c045efd7',
  'photo-1600607688969-a5bfcd646154',
  'photo-1616486338812-3dadae4b4ace',
  'photo-1618221195710-dd6b41faaea6',
  'photo-1600573472550-8090b5e0745e',
  'photo-1600607687920-4e2a09cf159d',
  'photo-1600585154340-be6161a56a0c',
  'photo-1600047509807-ba8f99d2cdde',
  'photo-1600607687920-4e2a09cf159d',
  'photo-1600566753086-00f18fb6b3ea',
  'photo-1600607688969-a5bfcd646154',
  'photo-1600210491892-03d54c0aaf87',
]

const gallery: Asset[] = galleryPreviews.map((id, index) =>
  asset(
    `/assets-hotel/detalle-decoracion-${index + 1}.jpg`,
    unsplash(id, 1400),
    `Detalle de decoración del Hotel Tegucigalpa ${index + 1}`,
  ),
)

const serviceCards: Array<{
  title: string
  text: string
  image?: Asset
  icon: LucideIcon
  tone: string
}> = [
  {
    title: 'Recepción 24/7',
    text: 'Siempre habrá alguien para recibirte, orientarte y hacerte sentir en casa.',
    image: asset('/assets-hotel/Lobby.jpg', unsplash('photo-1564501049412-61c2a3083791'), 'Recepción elegante con atención 24/7'),
    icon: Clock3,
    tone: 'service-card--image',
  },
  {
    title: 'Desayuno incluido',
    text: 'Comienza la mañana con café, algo rico y el ritmo tranquilo de La Entrada.',
    image: asset('/assets-hotel/area-comedor.jpg', unsplash('photo-1551882547-ff40c63fe5fa'), 'Área de comedor del hotel'),
    icon: Coffee,
    tone: 'service-card--image service-card--tall',
  },
  {
    title: 'Parqueo privado',
    text: 'Tu vehículo queda cerca, seguro y listo para continuar el viaje.',
    icon: CarFront,
    tone: 'service-card--solid',
  },
  {
    title: 'Hasta 29 horas',
    text: 'Una estadía flexible que se adapta mejor a tus planes de carretera y descanso.',
    icon: Sparkles,
    tone: 'service-card--gold',
  },
]

const benefits = [
  { icon: Wind, label: 'Aire acondicionado' },
  { icon: Droplets, label: 'Agua caliente' },
  { icon: Tv, label: 'TV Plasma' },
  { icon: Wifi, label: 'WiFi de alta velocidad' },
]

const reveal = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

function SmartImage({ asset: image, className = '', loading = 'lazy' as const }: { asset: Asset; className?: string; loading?: 'lazy' | 'eager' }) {
  const [src, setSrc] = useState(image.local)

  useEffect(() => {
    setSrc(image.local)
  }, [image.local])

  return (
    <img
      className={className}
      src={src}
      alt={image.alt}
      loading={loading}
      onError={() => {
        if (src !== image.preview) setSrc(image.preview)
      }}
    />
  )
}

function SectionHeading({ eyebrow, title, text, light = false }: { eyebrow: string; title: string; text?: string; light?: boolean }) {
  return (
    <div className={`section-heading ${light ? 'section-heading--light' : ''}`}>
      <span className="eyebrow"><i />{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  )
}

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeRoom, setActiveRoom] = useState(1)
  const [heroIndex, setHeroIndex] = useState(0)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const interval = window.setInterval(() => setHeroIndex((index) => (index + 1) % heroSlides.length), 6200)
    return () => window.clearInterval(interval)
  }, [])

  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [lightboxIndex])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setLightboxIndex(null)
      if (lightboxIndex !== null && event.key === 'ArrowRight') setLightboxIndex((lightboxIndex + 1) % gallery.length)
      if (lightboxIndex !== null && event.key === 'ArrowLeft') setLightboxIndex((lightboxIndex - 1 + gallery.length) % gallery.length)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [lightboxIndex])

  const currentRoom = useMemo(() => rooms.find((room) => room.beds === activeRoom) ?? rooms[0], [activeRoom])
  const roomWhatsapp = `${WHATSAPP}?text=${encodeURIComponent(`Hola, deseo reservar la habitación de ${currentRoom.beds} cama${currentRoom.beds > 1 ? 's' : ''} en Hotel Tegucigalpa`)}`
  const consultWhatsapp = `${WHATSAPP}?text=${encodeURIComponent('Hola, deseo consultar disponibilidad en Hotel Tegucigalpa')}`

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <header className={`site-nav ${scrolled ? 'site-nav--scrolled' : ''}`}>
        <a href="#inicio" className="brand" onClick={closeMenu} aria-label="Hotel Tegucigalpa, inicio">
          <span className="brand-mark">HT</span>
          <span className="brand-copy"><strong>Hotel</strong><em>Tegucigalpa</em></span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={menuOpen}>
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
        <nav className={`main-menu ${menuOpen ? 'main-menu--open' : ''}`} aria-label="Navegación principal">
          <a href="#inicio" onClick={closeMenu}>Inicio</a>
          <a href="#habitaciones" onClick={closeMenu}>Habitaciones</a>
          <a href="#servicios" onClick={closeMenu}>Servicios</a>
          <a href="#galeria" onClick={closeMenu}>Galería</a>
          <a href="#ubicacion" onClick={closeMenu}>Ubicación</a>
          <a className="nav-cta" href={consultWhatsapp} target="_blank" rel="noreferrer" onClick={closeMenu}>
            <MessageCircle size={16} /> Reservar
          </a>
        </nav>
      </header>

      <main>
        <section id="inicio" className="hero-section">
          <div className="hero-media" aria-hidden="true">
            <AnimatePresence initial={false} mode="sync">
              <motion.div key={heroIndex} className="hero-slide" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1.2, ease: 'easeInOut' }}>
                <SmartImage asset={heroSlides[heroIndex]} loading="eager" />
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="hero-overlay" />
          <div className="hero-content page-width">
            <motion.div className="hero-copy" initial="hidden" animate="visible" variants={reveal}>
              <span className="hero-kicker"><span /> La Entrada · Copán, Honduras</span>
              <h1>Tu espacio de <i>confort,</i><br /> elegancia y tranquilidad.</h1>
              <p className="hero-lede">Una pausa con alma colonial, atención cercana y todo lo que necesitas para sentirte bien lejos de casa.</p>
              <div className="hero-actions">
                <a href={consultWhatsapp} target="_blank" rel="noreferrer" className="button button--gold"><MessageCircle size={17} /> Consultar disponibilidad <ArrowUpRight size={16} /></a>
                <a href="tel:+50498881975" className="button button--ghost"><Phone size={17} /> +504 9888-1975</a>
              </div>
            </motion.div>
            <div className="hero-meta">
              <div className="hero-badges">
                <span><Coffee size={15} /> Desayuno incluido</span>
                <span><Clock3 size={15} /> Recepción 24/7</span>
                <span><Sparkles size={15} /> Hasta 29 horas</span>
              </div>
              <div className="hero-counter"><b>0{heroIndex + 1}</b><span>/ 03</span><div className="counter-line"><i style={{ width: `${((heroIndex + 1) / 3) * 100}%` }} /></div></div>
            </div>
          </div>
          <a href="#sobre-nosotros" className="scroll-cue" aria-label="Bajar a Sobre Nosotros"><span>Descubrir</span><ArrowDownRight size={18} /></a>
        </section>

        <motion.section id="sobre-nosotros" className="about-section section-pad page-width" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={reveal}>
          <div className="about-number">01<span> / 06</span></div>
          <div className="about-visual">
            <div className="about-frame"><SmartImage asset={asset('/assets-hotel/Lobby-1.jpg', unsplash('photo-1564501049412-61c2a3083791'), 'Interior luminoso de la recepción del hotel')} /></div>
            <div className="about-stamp"><span>Desde</span><strong>La</strong><span>Entrada</span><b>✦</b></div>
            <div className="about-detail"><Star size={13} fill="currentColor" /> 4.9 <span>hospitalidad cercana</span></div>
          </div>
          <div className="about-copy">
            <SectionHeading eyebrow="Sobre nosotros" title="Más que una noche, una bienvenida." text="En Hotel Tegucigalpa creemos que el descanso empieza desde el primer saludo. Somos ese punto de calma para quienes cruzan La Entrada, Copán: un lugar seguro, cómodo y honesto, donde la atención se siente personal." />
            <div className="about-highlight"><ShieldCheck size={21} /><div><strong>Ubicación estratégica</strong><span>A pocos minutos de las rutas que conectan tu próximo destino.</span></div></div>
            <a href="#habitaciones" className="text-link">Conoce nuestras habitaciones <ArrowUpRight size={16} /></a>
          </div>
        </motion.section>

        <section id="habitaciones" className="rooms-section section-pad">
          <div className="page-width">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.18 }} variants={reveal}>
              <SectionHeading eyebrow="Descansa a tu manera" title="Habitaciones pensadas para llegar y soltar." text="Elige el espacio que acompaña tu viaje. Todas nuestras habitaciones incluyen baño privado y comodidades para que descanses de verdad." />
            </motion.div>
            <div className="room-tabs" role="tablist" aria-label="Seleccionar número de camas">
              {rooms.map((room) => (
                <button key={room.beds} className={activeRoom === room.beds ? 'room-tab room-tab--active' : 'room-tab'} onClick={() => setActiveRoom(room.beds)} role="tab" aria-selected={activeRoom === room.beds}>
                  <span>0{room.beds}</span><b>{room.beds} cama{room.beds > 1 ? 's' : ''}</b>
                </button>
              ))}
            </div>
            <AnimatePresence mode="wait">
              <motion.div key={currentRoom.beds} className="room-feature" initial={{ opacity: 0, x: 26 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -26 }} transition={{ duration: 0.42, ease: 'easeOut' }}>
                <div className="room-photo room-photo--main">
                  <SmartImage asset={currentRoom.room} />
                  <span className="photo-tag">Dormitorio</span>
                </div>
                <div className="room-info">
                  <span className="eyebrow"><i />{currentRoom.eyebrow}</span>
                  <h3>{currentRoom.title}</h3>
                  <p>{currentRoom.description}</p>
                  <div className="room-facts"><span><BedDouble size={17} /> {currentRoom.size}</span><span><Bath size={17} /> Privado</span></div>
                  <div className="benefit-grid">
                    {benefits.map(({ icon: Icon, label }) => <span key={label}><Icon size={16} />{label}</span>)}
                  </div>
                  <a className="button button--teal" href={roomWhatsapp} target="_blank" rel="noreferrer"><MessageCircle size={17} /> Consultar esta habitación <ArrowUpRight size={16} /></a>
                </div>
                <div className="room-photo room-photo--bath">
                  <SmartImage asset={currentRoom.bathroom} />
                  <span className="photo-tag">Baño privado</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        <section id="servicios" className="services-section section-pad page-width">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.18 }} variants={reveal}>
            <SectionHeading eyebrow="Todo en su lugar" title="Pequeños detalles. Gran diferencia." text="Servicios diseñados para que tu estadía sea fácil, flexible y genuinamente agradable." />
          </motion.div>
          <div className="services-grid">
            {serviceCards.map((service, index) => {
              const Icon = service.icon
              return <motion.article key={service.title} className={`service-card ${service.tone}`} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={{ ...reveal, visible: { ...reveal.visible, transition: { ...reveal.visible.transition, delay: index * 0.07 } } }}>
                {service.image && <SmartImage asset={service.image} />}
                <div className="service-shade" />
                <div className="service-icon"><Icon size={20} /></div>
                <div className="service-content"><span>0{index + 1}</span><h3>{service.title}</h3><p>{service.text}</p></div>
                <ArrowUpRight className="service-arrow" size={18} />
              </motion.article>
            })}
          </div>
        </section>

        <section id="galeria" className="gallery-section section-pad">
          <div className="page-width">
            <motion.div className="gallery-intro" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={reveal}>
              <SectionHeading eyebrow="Detalles & ambiente" title="La calidez vive en los detalles." text="Texturas, luz y rincones que hacen que una estadía se sienta como una historia propia." />
              <span className="gallery-count"><b>18</b> momentos<br />para recordar</span>
            </motion.div>
            <div className="bento-grid">
              {gallery.map((image, index) => <motion.button key={image.local} className={`bento-item bento-item--${(index % 6) + 1}`} onClick={() => setLightboxIndex(index)} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.12 }} variants={{ ...reveal, visible: { ...reveal.visible, transition: { ...reveal.visible.transition, delay: (index % 4) * 0.05 } } }} aria-label={`Abrir imagen ${index + 1} de la galería`}>
                <SmartImage asset={image} />
                <span className="bento-overlay"><MaximizeIcon /><small>0{index + 1}</small></span>
              </motion.button>)}
            </div>
          </div>
        </section>

        <section id="ubicacion" className="location-section section-pad page-width">
          <motion.div className="location-copy" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.18 }} variants={reveal}>
            <span className="eyebrow"><i />Tu próxima pausa</span>
            <h2>Nos encuentras donde el camino se vuelve <i>tranquilo.</i></h2>
            <p>Estamos en La Entrada, Copán, un punto estratégico para descansar, recorrer la zona y seguir tu viaje con energía.</p>
            <div className="contact-list">
              <a href="tel:+50498881975"><span className="contact-icon"><Phone size={17} /></span><span><small>Llámanos 24/7</small><strong>+504 9888-1975</strong></span><ArrowUpRight size={17} /></a>
              <a href={consultWhatsapp} target="_blank" rel="noreferrer"><span className="contact-icon"><MessageCircle size={17} /></span><span><small>Escríbenos por WhatsApp</small><strong>Reservas directas</strong></span><ArrowUpRight size={17} /></a>
              <a href={MAP_LINK} target="_blank" rel="noreferrer"><span className="contact-icon"><Navigation size={17} /></span><span><small>Visítanos</small><strong>La Entrada, Copán, Honduras</strong></span><ArrowUpRight size={17} /></a>
            </div>
          </motion.div>
          <motion.div className="map-card" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={reveal}>
            <iframe title="Mapa de ubicación del Hotel Tegucigalpa en La Entrada, Copán" src="https://www.google.com/maps?q=La+Entrada,+Cop%C3%A1n,+Honduras&output=embed" loading="lazy" />
            <a className="map-label" href={MAP_LINK} target="_blank" rel="noreferrer"><span><Navigation size={16} /></span><div><strong>Hotel Tegucigalpa</strong><small>Ver en Google Maps <ArrowUpRight size={13} /></small></div></a>
          </motion.div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="page-width footer-main">
          <div className="footer-brand"><a href="#inicio" className="brand"><span className="brand-mark">HT</span><span className="brand-copy"><strong>Hotel</strong><em>Tegucigalpa</em></span></a><p>Tu espacio de confort,<br />elegancia y tranquilidad.</p></div>
          <div className="footer-nav"><span>Navegar</span><a href="#sobre-nosotros">Sobre nosotros</a><a href="#habitaciones">Habitaciones</a><a href="#galeria">Galería</a><a href="#ubicacion">Ubicación</a></div>
          <div className="footer-contact"><span>Contacto directo</span><a href="tel:+50498881975">+504 9888-1975</a><a href={consultWhatsapp} target="_blank" rel="noreferrer">WhatsApp para reservas <ArrowUpRight size={14} /></a><small>Recepción abierta 24 horas</small></div>
          <a href={consultWhatsapp} target="_blank" rel="noreferrer" className="footer-cta"><MessageCircle size={20} /><span>Reserva tu<br /><b>próxima pausa</b></span><ArrowUpRight size={18} /></a>
        </div>
        <div className="page-width footer-bottom"><span>© {new Date().getFullYear()} Hotel Tegucigalpa. Todos los derechos reservados.</span><span>Hecho para descansar mejor en Copán <span className="gold-star">✦</span></span></div>
      </footer>

      <AnimatePresence>
        {lightboxIndex !== null && <motion.div className="lightbox" role="dialog" aria-modal="true" aria-label="Galería ampliada" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setLightboxIndex(null)}>
          <button className="lightbox-close" onClick={() => setLightboxIndex(null)} aria-label="Cerrar galería"><X size={22} /></button>
          <button className="lightbox-nav lightbox-nav--prev" onClick={(event) => { event.stopPropagation(); setLightboxIndex((lightboxIndex - 1 + gallery.length) % gallery.length) }} aria-label="Imagen anterior">‹</button>
          <motion.div className="lightbox-content" initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} transition={{ duration: 0.35 }} onClick={(event) => event.stopPropagation()}>
            <SmartImage asset={gallery[lightboxIndex]} loading="eager" />
            <span>{String(lightboxIndex + 1).padStart(2, '0')} / 18 · Detalles & ambiente</span>
          </motion.div>
          <button className="lightbox-nav lightbox-nav--next" onClick={(event) => { event.stopPropagation(); setLightboxIndex((lightboxIndex + 1) % gallery.length) }} aria-label="Imagen siguiente">›</button>
        </motion.div>}
      </AnimatePresence>
    </div>
  )
}

function MaximizeIcon() {
  return <span className="maximize-icon"><ArrowUpRight size={15} /></span>
}

export default App
