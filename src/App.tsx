import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowUpRight,
  Bath,
  BedDouble,
  CarFront,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Coffee,
  Droplets,
  Maximize2,
  Menu,
  MessageCircle,
  Navigation,
  Phone,
  ShieldCheck,
  Sparkles,
  Tv,
  Wifi,
  Wind,
  X,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const WHATSAPP = 'https://wa.me/50498881975'
const MAP_LINK = 'https://maps.app.goo.gl/PBfYwGXhe4ztUwus6'
const WAZE_LINK = 'https://waze.com/ul?q=Hotel+Tegucigalpa+La+Entrada+Copan&navigate=yes'
const HOTEL_LOGO = '/assets-hotel/Logo-hotel.png'

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
  bedroomPhotos: Asset[]
  bathroomPhotos: Asset[]
}

const asset = (local: string, preview: string, alt: string): Asset => ({ local, preview, alt })

type HeroSlide = Asset & {
  imgClass?: string
}

const heroSlides: HeroSlide[] = [
  {
    ...asset(
      '/assets-hotel/fachada-principal-1.jpg',
      unsplash('photo-1566073771259-6a8506099945', 2200),
      'Fachada principal y vista exterior del Hotel Tegucigalpa',
    ),
    imgClass: 'hero-slide-img--fachada-1',
  },
  asset(
    '/assets-hotel/Lobby.jpg',
    unsplash('photo-1564501049412-61c2a3083791', 2200),
    'Lobby y recepción del Hotel Tegucigalpa',
  ),
  {
    ...asset(
      '/assets-hotel/fachada-principal.jpg',
      unsplash('photo-1566073771259-6a8506099945', 2200),
      'Fachada principal, letrero y entrada del Hotel Tegucigalpa',
    ),
    imgClass: 'hero-slide-img--fachada-principal',
  },
  asset(
    '/assets-hotel/detalle-decoracion-2.jpg',
    unsplash('photo-1618220179428-22790b461013', 2200),
    'Detalles de diseño y texturas coloniales',
  ),
  asset(
    '/assets-hotel/detalle-decoracion-9.jpg',
    unsplash('photo-1600585154340-be6161a56a0c', 2200),
    'Ambiente cálido y acogedor en Hotel Tegucigalpa',
  ),
  asset(
    '/assets-hotel/Lobby-2.jpg',
    unsplash('photo-1564501049412-61c2a3083791', 2200),
    'Área de descanso y bienvenida en el Lobby',
  ),
]

// Array unificado de baños privados disponible para todas las habitaciones
const commonBathroomPhotos: Asset[] = [
  asset(
    '/assets-hotel/bano-privado-hab1cama-1.jpg',
    unsplash('photo-1600566753190-17f0baa2a6c3'),
    'Baño privado — Ducha y lavamanos con agua caliente',
  ),
  asset(
    '/assets-hotel/bano-privado-hab1cama-3.jpg',
    unsplash('photo-1600607687920-4e2a09cf159d'),
    'Baño privado — Sanitario, toallas limpias y amenidades',
  ),
  asset(
    '/assets-hotel/bano-privado-hab2cama-1.jpg',
    unsplash('photo-1552321554-5fefe8c9ef14'),
    'Baño privado — Acabados modernos y máxima higiene',
  ),
]

const rooms: Room[] = [
  {
    beds: 1,
    eyebrow: 'Íntima y serena',
    title: 'Habitación Sencilla',
    description: 'Un refugio silencioso para descansar, trabajar y despertar con calma tras recorrer las rutas de Copán.',
    size: '1 cama',
    bedroomPhotos: [
      asset('/assets-hotel/hab-sencilla-1cama-1.jpg', unsplash('photo-1631049307264-da0ec9d70304'), 'Habitación sencilla — Vista general del dormitorio'),
      asset('/assets-hotel/hab-sencilla-1cama-2.jpg', unsplash('photo-1590490360182-c33d57733427'), 'Habitación sencilla — Cama confortable con ropa blanca'),
      asset('/assets-hotel/hab-sencilla-1cama-3.jpg', unsplash('photo-1566665797739-1674de7a421a'), 'Habitación sencilla — Iluminación y área de descanso'),
      asset('/assets-hotel/hab-sencilla-1cama-4.jpg', unsplash('photo-1582719478250-c89cae4dc85b'), 'Habitación sencilla — Detalles y comodidad'),
      asset('/assets-hotel/hab-sencilla-1cama-5.jpg', unsplash('photo-1618773928121-c32242e63f39'), 'Habitación sencilla — Espacio de reposo y serenidad'),
      asset('/assets-hotel/hab-sencilla-1cama-6.jpg', unsplash('photo-1595526114035-0d45ed16cfbf'), 'Habitación sencilla — Ambiente cálido y acogedor'),
    ],
    bathroomPhotos: commonBathroomPhotos,
  },
  {
    beds: 2,
    eyebrow: 'Para compartir',
    title: 'Habitación Doble',
    description: 'Dos camas, amplitud y todo lo necesario para descansar en pareja o con un compañero de viaje.',
    size: '2 camas',
    bedroomPhotos: [
      asset('/assets-hotel/hab-doble-2camas-1.jpg', unsplash('photo-1590490360182-c33d57733427'), 'Habitación doble — Dos camas confortables'),
      asset('/assets-hotel/hab-doble-2camas-2.jpg', unsplash('photo-1566665797739-1674de7a421a'), 'Habitación doble — Vista frontal y ventilación'),
      asset('/assets-hotel/hab-doble-2camas-3.jpg', unsplash('photo-1631049307264-da0ec9d70304'), 'Habitación doble — Amplitud y espacio para equipaje'),
    ],
    bathroomPhotos: commonBathroomPhotos,
  },
  {
    beds: 3,
    eyebrow: 'Para escapadas',
    title: 'Habitación Triple',
    description: 'La opción equilibrada para familia o amigos que buscan su propio ritmo, espacio y confort.',
    size: '3 camas',
    bedroomPhotos: [
      asset('/assets-hotel/hab-triple-3camas-1.jpg', unsplash('photo-1566665797739-1674de7a421a'), 'Habitación triple — Distribución de las tres camas'),
      asset('/assets-hotel/hab-triple-3camas-2.jpg', unsplash('photo-1590490360182-c33d57733427'), 'Habitación triple — Vista lateral amplia'),
      asset('/assets-hotel/hab-triple-3camas-3.jpg', unsplash('photo-1631049307264-da0ec9d70304'), 'Habitación triple — Iluminación y comodidad'),
      asset('/assets-hotel/hab-triple-3camas-4.jpg', unsplash('photo-1582719478250-c89cae4dc85b'), 'Habitación triple — Espacio confortable para tres personas'),
    ],
    bathroomPhotos: commonBathroomPhotos,
  },
  {
    beds: 4,
    eyebrow: 'Para todos',
    title: 'Habitación Cuádruple',
    description: 'Más espacio para reunirse, descansar y disfrutar Copán sin prisas. Ideal para grupos grandes y familias.',
    size: '4 camas',
    bedroomPhotos: [
      asset('/assets-hotel/hab-cuadruple-4camas-1.jpg', unsplash('photo-1566665797739-1674de7a421a'), 'Habitación cuádruple — Cuatro camas para grupos y familias'),
      asset('/assets-hotel/hab-cuadruple-4camas-2.jpg', unsplash('photo-1590490360182-c33d57733427'), 'Habitación cuádruple — Vista panorámica del dormitorio'),
      asset('/assets-hotel/hab-cuadruple-4camas-3.jpg', unsplash('photo-1631049307264-da0ec9d70304'), 'Habitación cuádruple — Gran amplitud y luminosidad'),
    ],
    bathroomPhotos: commonBathroomPhotos,
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
    `Detalle de decoración y calidez del Hotel Tegucigalpa ${index + 1}`,
  ),
)

const bentoPattern = [
  'bento-item--wide',
  'bento-item--tall',
  '',
  '',
  'bento-item--tall',
  'bento-item--large',
  '',
  'bento-item--wide',
  '',
  '',
  'bento-item--tall',
  'bento-item--wide',
  '',
  'bento-item--large',
  '',
  'bento-item--tall',
  'bento-item--wide',
  '',
]

const serviceCards: Array<{
  title: string
  text: string
  image: Asset
  photos?: Asset[]
  icon: LucideIcon
  tone: string
}> = [
  {
    title: 'Recepción 24/7',
    text: 'Siempre habrá alguien para recibirte, orientarte y hacerte sentir en casa con atención continua.',
    image: asset('/assets-hotel/Lobby.jpg', unsplash('photo-1564501049412-61c2a3083791'), 'Recepción y Lobby del Hotel Tegucigalpa'),
    photos: [
      asset('/assets-hotel/Lobby.jpg', unsplash('photo-1564501049412-61c2a3083791'), 'Recepción y Lobby principal 24/7'),
      asset('/assets-hotel/Lobby-1.jpg', unsplash('photo-1564501049412-61c2a3083791'), 'Interior luminoso y sala de espera del Lobby'),
      asset('/assets-hotel/Lobby-2.jpg', unsplash('photo-1564501049412-61c2a3083791'), 'Área de atención y bienvenida'),
    ],
    icon: Clock3,
    tone: 'service-card--image',
  },
  {
    title: 'Desayuno incluido',
    text: 'Comienza la mañana con café recién hecho, sabores locales y el ambiente acogedor de nuestro comedor.',
    image: asset('/assets-hotel/area-comedor.jpg', unsplash('photo-1551882547-ff40c63fe5fa'), 'Área de comedor y restaurante del hotel'),
    photos: [
      asset('/assets-hotel/area-comedor.jpg', unsplash('photo-1551882547-ff40c63fe5fa'), 'Área de comedor principal'),
      asset('/assets-hotel/area-comedor-1.jpg', unsplash('photo-1551882547-ff40c63fe5fa'), 'Mesas y ambiente del comedor'),
      asset('/assets-hotel/area-comedor-3.jpg', unsplash('photo-1551882547-ff40c63fe5fa'), 'Espacio iluminado para disfrutar el desayuno'),
      asset('/assets-hotel/area-comedor-4.jpg', unsplash('photo-1551882547-ff40c63fe5fa'), 'Detalles de servicio y cafetería matutina'),
    ],
    icon: Coffee,
    tone: 'service-card--image',
  },
  {
    title: 'Parqueo privado',
    text: 'Estacionamiento privado dentro de las instalaciones para que tu vehículo descanse seguro.',
    image: asset('/assets-hotel/parqueo-1.jpg', unsplash('photo-1590674899484-d5640e854abe'), 'Parqueo privado seguro en Hotel Tegucigalpa'),
    photos: [
      asset('/assets-hotel/parqueo-1.jpg', unsplash('photo-1590674899484-d5640e854abe'), 'Área de parqueo privado para huéspedes'),
      asset('/assets-hotel/parqueo-2.jpg', unsplash('photo-1590674899484-d5640e854abe'), 'Estacionamiento seguro en las instalaciones'),
    ],
    icon: CarFront,
    tone: 'service-card--image',
  },
  {
    title: 'Hasta 29 horas',
    text: 'Una estadía flexible que se adapta mejor a tus planes de carretera y descanso.',
    image: asset('/assets-hotel/detalle-decoracion-1.jpg', unsplash('photo-1582719478250-c89cae4dc85b'), 'Detalle acogedor y hospedaje flexible hasta 29 horas'),
    photos: [
      asset('/assets-hotel/detalle-decoracion-1.jpg', unsplash('photo-1582719478250-c89cae4dc85b'), 'Hospedaje flexible hasta 29 horas con confort completo'),
    ],
    icon: Sparkles,
    tone: 'service-card--image service-card--gold-accent',
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

function SmartImage({
  asset: image,
  className = '',
  loading = 'lazy' as const,
  decoding = 'async' as const,
  fetchPriority,
}: {
  asset: Asset
  className?: string
  loading?: 'lazy' | 'eager'
  decoding?: 'async' | 'auto' | 'sync'
  fetchPriority?: 'high' | 'low' | 'auto'
}) {
  const [failed, setFailed] = useState(false)
  const [prevLocal, setPrevLocal] = useState(image.local)

  if (prevLocal !== image.local) {
    setPrevLocal(image.local)
    setFailed(false)
  }

  return (
    <img
      className={className}
      src={failed ? image.preview : image.local}
      alt={image.alt}
      loading={loading}
      decoding={decoding}
      {...(fetchPriority ? { fetchpriority: fetchPriority } : {})}
      draggable={false}
      onError={() => {
        if (!failed) setFailed(true)
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

type ActiveLightbox = {
  items: Asset[]
  index: number
  title?: string
}

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeRoom, setActiveRoom] = useState(1)
  const [roomCategory, setRoomCategory] = useState<'bedroom' | 'bathroom'>('bedroom')
  const [roomPhotoIndex, setRoomPhotoIndex] = useState(0)
  const [heroIndex, setHeroIndex] = useState(0)
  const [activeLightbox, setActiveLightbox] = useState<ActiveLightbox | null>(null)
  const [bookingModalOpen, setBookingModalOpen] = useState(false)
  const [bookingForm, setBookingForm] = useState({
    name: '',
    phone: '',
    roomType: 'Habitación Sencilla (1 cama)',
    checkIn: '',
    guests: '1',
    notes: '',
    honeypot: '',
  })

  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const isScrolled = window.scrollY > 36
          setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev))
          ticking = false
        })
        ticking = true
      }
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    let interval: number
    const start = () => {
      window.clearInterval(interval)
      interval = window.setInterval(() => {
        if (!document.hidden) {
          setHeroIndex((index) => (index + 1) % heroSlides.length)
        }
      }, 6200)
    }
    start()
    document.addEventListener('visibilitychange', start)
    return () => {
      window.clearInterval(interval)
      document.removeEventListener('visibilitychange', start)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = (activeLightbox !== null || bookingModalOpen) ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [activeLightbox, bookingModalOpen])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (bookingModalOpen) setBookingModalOpen(false)
        if (activeLightbox) setActiveLightbox(null)
      }
      if (!activeLightbox) return
      if (event.key === 'ArrowRight') {
        setActiveLightbox((prev) => (prev ? { ...prev, index: (prev.index + 1) % prev.items.length } : null))
      }
      if (event.key === 'ArrowLeft') {
        setActiveLightbox((prev) => (prev ? { ...prev, index: (prev.index - 1 + prev.items.length) % prev.items.length } : null))
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [activeLightbox, bookingModalOpen])

  const currentRoom = useMemo(() => rooms.find((room) => room.beds === activeRoom) ?? rooms[0], [activeRoom])

  const activePhotos = useMemo(() => {
    if (roomCategory === 'bathroom' && currentRoom.bathroomPhotos.length > 0) {
      return currentRoom.bathroomPhotos
    }
    return currentRoom.bedroomPhotos
  }, [currentRoom, roomCategory])

  useEffect(() => {
    if (currentRoom.bathroomPhotos.length === 0 && roomCategory === 'bathroom') {
      setRoomCategory('bedroom')
    }
    setRoomPhotoIndex(0)
  }, [activeRoom, roomCategory, currentRoom])

  // Preload active room photos in browser cache so switching is instantaneous on mobile
  useEffect(() => {
    activePhotos.forEach((photo) => {
      const img = new Image()
      img.src = photo.local
    })
  }, [activePhotos])

  const currentPhoto = activePhotos[roomPhotoIndex] || activePhotos[0]

  const handlePrevPhoto = useCallback((e?: React.SyntheticEvent) => {
    if (e) {
      e.stopPropagation()
      if ('preventDefault' in e) e.preventDefault()
    }
    setRoomPhotoIndex((prev) => (prev - 1 + activePhotos.length) % activePhotos.length)
  }, [activePhotos.length])

  const handleNextPhoto = useCallback((e?: React.SyntheticEvent) => {
    if (e) {
      e.stopPropagation()
      if ('preventDefault' in e) e.preventDefault()
    }
    setRoomPhotoIndex((prev) => (prev + 1) % activePhotos.length)
  }, [activePhotos.length])

  const touchStartX = useRef<number | null>(null)
  const touchStartY = useRef<number | null>(null)
  const isSwiping = useRef(false)

  const handleRoomTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
    touchStartY.current = e.touches[0].clientY
    isSwiping.current = false
  }, [])

  const handleRoomTouchMove = useCallback((e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return
    const diffX = touchStartX.current - e.touches[0].clientX
    const diffY = touchStartY.current - e.touches[0].clientY
    if (Math.abs(diffX) > 10 && Math.abs(diffX) > Math.abs(diffY)) {
      isSwiping.current = true
    }
  }, [])

  const handleRoomTouchEnd = useCallback((e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return
    const diffX = touchStartX.current - e.changedTouches[0].clientX
    const diffY = touchStartY.current - e.changedTouches[0].clientY
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 35) {
      if (diffX > 0) {
        handleNextPhoto()
      } else {
        handlePrevPhoto()
      }
    }
    touchStartX.current = null
    touchStartY.current = null
    setTimeout(() => {
      isSwiping.current = false
    }, 60)
  }, [handleNextPhoto, handlePrevPhoto])

  const openRoomLightbox = useCallback((index = roomPhotoIndex) => {
    setActiveLightbox({
      items: activePhotos,
      index,
      title: `${currentRoom.title} · ${roomCategory === 'bedroom' ? 'Dormitorio' : 'Baño Privado'}`,
    })
  }, [activePhotos, currentRoom.title, roomCategory, roomPhotoIndex])

  const handleSliderClick = useCallback(() => {
    if (isSwiping.current) return
    openRoomLightbox(roomPhotoIndex)
  }, [openRoomLightbox, roomPhotoIndex])

  const openBookingModal = useCallback((preselectedRoom?: string) => {
    if (preselectedRoom) {
      setBookingForm((prev) => ({ ...prev, roomType: preselectedRoom }))
    }
    setBookingModalOpen(true)
  }, [])

  const handleBookingSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault()
    // Anti-bot Honeypot validation: If field filled, silently abort to stop automated spam bots
    if (bookingForm.honeypot.trim().length > 0) {
      setBookingModalOpen(false)
      return
    }

    const msg = `Hola Hotel Tegucigalpa, deseo consultar disponibilidad y reservar:\n• Nombre: ${bookingForm.name.trim() || 'Huésped'}\n• Teléfono: ${bookingForm.phone.trim() || 'No especificado'}\n• Habitación: ${bookingForm.roomType}\n• Fecha estimada: ${bookingForm.checkIn || 'Por definir'}\n• Huéspedes: ${bookingForm.guests}${bookingForm.notes.trim() ? `\n• Nota: ${bookingForm.notes.trim()}` : ''}`
    const url = `${WHATSAPP}?text=${encodeURIComponent(msg)}`
    window.open(url, '_blank', 'noopener,noreferrer')
    setBookingModalOpen(false)
  }, [bookingForm])

  const roomWhatsapp = `${WHATSAPP}?text=${encodeURIComponent(`Hola, deseo reservar la habitación de ${currentRoom.beds} cama${currentRoom.beds > 1 ? 's' : ''} en Hotel Tegucigalpa`)}`
  const consultWhatsapp = `${WHATSAPP}?text=${encodeURIComponent('Hola, deseo consultar disponibilidad en Hotel Tegucigalpa')}`

  const closeMenu = useCallback(() => setMenuOpen(false), [])

  return (
    <div className="site-shell">
      <header className={`site-nav ${scrolled ? 'site-nav--scrolled' : ''}`}>
        <div className="site-nav-inner container mx-auto px-6 md:px-12 lg:px-16">
          <a href="#inicio" className="brand" onClick={closeMenu} aria-label="Hotel Tegucigalpa, inicio">
            <img src={HOTEL_LOGO} alt="Hotel Tegucigalpa Logo" className="brand-logo" width={54} height={54} draggable={false} />
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
            <button
              type="button"
              className="nav-cta"
              onClick={() => {
                openBookingModal()
                closeMenu()
              }}
            >
              <MessageCircle size={16} /> Reservar
            </button>
          </nav>
        </div>
      </header>

      <main>
        <section id="inicio" className="hero-section">
          <div className="hero-media" aria-hidden="true">
            <AnimatePresence initial={false} mode="sync">
              <motion.div
                key={heroIndex}
                className="hero-slide"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2, ease: 'easeInOut' }}
              >
                <SmartImage
                  asset={heroSlides[heroIndex]}
                  className={heroSlides[heroIndex].imgClass}
                  loading="eager"
                  fetchPriority={heroIndex === 0 ? 'high' : 'auto'}
                  decoding="async"
                />
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="hero-overlay" />
          <div className="hero-content container mx-auto px-6 md:px-12 lg:px-16">
            <motion.div className="hero-copy" initial="hidden" animate="visible" variants={reveal}>
              <span className="hero-kicker"><span /> La Entrada · Copán, Honduras</span>
              <h1>Tu espacio de <i>confort,</i><br /> elegancia y tranquilidad.</h1>
              <p className="hero-lede">Una pausa con alma colonial, atención cercana y todo lo que necesitas para sentirte bien lejos de casa.</p>
              <div className="hero-actions">
                <button
                  type="button"
                  onClick={() => openBookingModal()}
                  className="button button--gold"
                >
                  <MessageCircle size={17} /> Consultar disponibilidad <ArrowUpRight size={16} />
                </button>
                <a href="tel:+50498881975" className="button button--ghost">
                  <Phone size={17} /> +504 9888-1975
                </a>
              </div>
            </motion.div>
            <div className="hero-meta">
              <div className="hero-badges">
                <span className="hero-badge-clean">
                  <Coffee size={18} className="hero-badge-icon" />
                  <span>Desayuno incluido</span>
                </span>
                <span className="hero-badge-clean">
                  <Clock3 size={18} className="hero-badge-icon" />
                  <span>Recepción 24/7</span>
                </span>
                <span className="hero-badge-clean">
                  <Sparkles size={18} className="hero-badge-icon" />
                  <span>Hasta 29 horas</span>
                </span>
              </div>
            </div>
          </div>

          {/* Indicador de fotos (Carrusel) reubicado en la esquina inferior DERECHA del Hero */}
          <div className="hero-counter-corner" aria-label="Progreso de fotos de portada">
            <span className="counter-current">0{heroIndex + 1}</span>
            <span className="counter-sep">/</span>
            <span className="counter-total">0{heroSlides.length}</span>
            <div className="counter-line" role="progressbar" aria-valuenow={heroIndex + 1} aria-valuemin={1} aria-valuemax={heroSlides.length}>
              <i style={{ width: `${((heroIndex + 1) / heroSlides.length) * 100}%` }} />
            </div>
          </div>
          <div className="hero-dots" aria-label="Selector de fotos de portada">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                type="button"
                className={`hero-dot ${i === heroIndex ? 'hero-dot--active' : ''}`}
                onClick={() => setHeroIndex(i)}
                aria-label={`Ver foto ${i + 1}`}
              />
            ))}
          </div>
        </section>

        <section className="about-section-wrap">
          <motion.div
            id="sobre-nosotros"
            className="about-section section-pad page-width"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={reveal}
          >
            <div className="about-number">01<span> / 06</span></div>
            <div className="about-visual">
              <div
                className="about-frame about-frame--clickable"
                onClick={() =>
                  setActiveLightbox({
                    items: [
                      asset('/assets-hotel/Lobby.jpg', unsplash('photo-1564501049412-61c2a3083791'), 'Recepción y Lobby principal del Hotel Tegucigalpa 24/7'),
                      asset('/assets-hotel/Lobby-1.jpg', unsplash('photo-1564501049412-61c2a3083791'), 'Interior luminoso y sala de espera del Lobby'),
                      asset('/assets-hotel/Lobby-2.jpg', unsplash('photo-1564501049412-61c2a3083791'), 'Área de recepción y bienvenida'),
                    ],
                    index: 0,
                    title: 'Lobby & Recepción 24/7',
                  })
                }
                role="button"
                tabIndex={0}
                aria-label="Ver fotos del Lobby y recepción"
              >
                <SmartImage asset={asset('/assets-hotel/Lobby.jpg', unsplash('photo-1564501049412-61c2a3083791'), 'Lobby y recepción del Hotel Tegucigalpa')} />
              </div>
              <div className="about-stamp">
                <span>Desde</span>
                <strong>La Entrada</strong>
                <small>Copán</small>
              </div>
              <div className="about-detail">
                <ShieldCheck size={15} />
                <span>Atención Personalizada 24/7</span>
              </div>
            </div>
            <div className="about-copy">
              <SectionHeading
                eyebrow="Sobre nosotros"
                title="Más que una noche, una bienvenida."
                text="En Hotel Tegucigalpa creemos que el descanso empieza desde el primer saludo. Somos ese punto de calma para quienes cruzan La Entrada, Copán: un lugar seguro, cómodo y honesto, donde la atención se siente personal."
              />
              <div className="about-highlight">
                <ShieldCheck size={21} />
                <div>
                  <strong>Ubicación estratégica y segura</strong>
                  <span>A pocos minutos de las rutas que conectan con los principales destinos del occidente de Honduras.</span>
                </div>
              </div>
              <a href="#habitaciones" className="text-link">
                Conoce nuestras habitaciones <ArrowUpRight size={16} />
              </a>
            </div>
          </motion.div>
        </section>

        <section id="habitaciones" className="rooms-section section-pad">
          <div className="page-width">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.18 }} variants={reveal}>
              <SectionHeading
                eyebrow="Descansa a tu manera"
                title="Habitaciones pensadas para llegar y relajarse."
                text="Explora cada rincón de nuestras habitaciones. Todas cuentan con baño privado completo, aire acondicionado, agua caliente y la mayor comodidad para tu estadía en Copán."
              />
            </motion.div>
            <div className="room-tabs" role="tablist" aria-label="Seleccionar número de camas">
              {rooms.map((room) => (
                <button
                  key={room.beds}
                  className={activeRoom === room.beds ? 'room-tab room-tab--active' : 'room-tab'}
                  onClick={() => setActiveRoom(room.beds)}
                  role="tab"
                  aria-selected={activeRoom === room.beds}
                >
                  <span>0{room.beds}</span>
                  <b>{room.beds} cama{room.beds > 1 ? 's' : ''}</b>
                </button>
              ))}
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentRoom.beds}
                className="room-showcase"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.38, ease: 'easeOut' }}
              >
                {/* Visual Media Column (Slider + Subtabs + Thumbnails) */}
                <div className="room-gallery-col">
                  {/* Category switcher tabs */}
                  <div className="room-category-tabs">
                    <button
                      type="button"
                      className={`category-pill ${roomCategory === 'bedroom' ? 'category-pill--active' : ''}`}
                      onClick={() => setRoomCategory('bedroom')}
                    >
                      <BedDouble size={15} />
                      <span>Fotos Dormitorio</span>
                      <small>({currentRoom.bedroomPhotos.length})</small>
                    </button>
                    {currentRoom.bathroomPhotos.length > 0 && (
                      <button
                        type="button"
                        className={`category-pill ${roomCategory === 'bathroom' ? 'category-pill--active' : ''}`}
                        onClick={() => setRoomCategory('bathroom')}
                      >
                        <Bath size={15} />
                        <span>Fotos Baño Privado</span>
                        <small>({currentRoom.bathroomPhotos.length})</small>
                      </button>
                    )}
                  </div>

                  {/* Main Interactive Carousel / Slider */}
                  <div
                    className="room-slider"
                    onClick={handleSliderClick}
                    onTouchStart={handleRoomTouchStart}
                    onTouchMove={handleRoomTouchMove}
                    onTouchEnd={handleRoomTouchEnd}
                    role="button"
                    tabIndex={0}
                    aria-label="Abrir imagen en pantalla completa (o deslizar para navegar)"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault()
                        openRoomLightbox(roomPhotoIndex)
                      }
                    }}
                  >
                    {activePhotos.map((photo, idx) => {
                      const isActive = idx === roomPhotoIndex
                      return (
                        <div
                          key={photo.local}
                          className={`room-slider-slide ${isActive ? 'room-slider-slide--active' : ''}`}
                          aria-hidden={!isActive}
                        >
                          <SmartImage
                            asset={photo}
                            className="room-slider-img"
                            loading="eager"
                            decoding="async"
                          />
                          <div className="room-slider-shade" />
                        </div>
                      )
                    })}

                    {/* Top badging & zoom action */}
                    <div
                      className="room-slider-topbar"
                      onClick={(e) => e.stopPropagation()}
                      onTouchStart={(e) => e.stopPropagation()}
                      onTouchEnd={(e) => e.stopPropagation()}
                    >
                      <span className="room-slider-badge">
                        {roomCategory === 'bedroom' ? 'Dormitorio' : 'Baño Privado'} · {String(roomPhotoIndex + 1).padStart(2, '0')} / {String(activePhotos.length).padStart(2, '0')}
                      </span>
                      <button
                        type="button"
                        className="room-slider-zoom-btn"
                        onClick={() => openRoomLightbox(roomPhotoIndex)}
                        aria-label="Ampliar foto en pantalla completa"
                      >
                        <Maximize2 size={13} />
                        <span>Ver ampliada</span>
                      </button>
                    </div>

                    {/* Carousel Navigation Arrows */}
                    {activePhotos.length > 1 && (
                      <>
                        <button
                          type="button"
                          className="slider-nav-arrow slider-nav-arrow--prev"
                          onClick={(e) => {
                            e.stopPropagation()
                            handlePrevPhoto(e)
                          }}
                          onTouchStart={(e) => e.stopPropagation()}
                          onTouchEnd={(e) => e.stopPropagation()}
                          aria-label="Foto anterior"
                        >
                          <ChevronLeft size={22} />
                        </button>
                        <button
                          type="button"
                          className="slider-nav-arrow slider-nav-arrow--next"
                          onClick={(e) => {
                            e.stopPropagation()
                            handleNextPhoto(e)
                          }}
                          onTouchStart={(e) => e.stopPropagation()}
                          onTouchEnd={(e) => e.stopPropagation()}
                          aria-label="Foto siguiente"
                        >
                          <ChevronRight size={22} />
                        </button>

                        {/* Navigation dots */}
                        <div
                          className="slider-dots"
                          onClick={(e) => e.stopPropagation()}
                          onTouchStart={(e) => e.stopPropagation()}
                          onTouchEnd={(e) => e.stopPropagation()}
                        >
                          {activePhotos.map((_, dotIdx) => (
                            <button
                              key={dotIdx}
                              type="button"
                              className={`slider-dot ${dotIdx === roomPhotoIndex ? 'slider-dot--active' : ''}`}
                              onClick={(e) => {
                                e.stopPropagation()
                                setRoomPhotoIndex(dotIdx)
                              }}
                              onTouchStart={(e) => e.stopPropagation()}
                              onTouchEnd={(e) => e.stopPropagation()}
                              aria-label={`Ir a foto ${dotIdx + 1}`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>

                  {/* Thumbnail Filmstrip */}
                  {activePhotos.length > 1 && (
                    <div className="room-filmstrip" aria-label="Miniaturas de la habitación">
                      {activePhotos.map((photo, idx) => (
                        <button
                          key={photo.local}
                          type="button"
                          className={`filmstrip-item ${idx === roomPhotoIndex ? 'filmstrip-item--active' : ''}`}
                          onClick={() => setRoomPhotoIndex(idx)}
                          aria-label={`Seleccionar foto ${idx + 1}`}
                        >
                          <SmartImage asset={photo} />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Room Info & Booking Column */}
                <div className="room-details-col">
                  <span className="eyebrow"><i />{currentRoom.eyebrow}</span>
                  <h3>{currentRoom.title}</h3>
                  <p className="room-desc">{currentRoom.description}</p>

                  <div className="room-facts">
                    <span><BedDouble size={17} /> {currentRoom.size}</span>
                    <span><Bath size={17} /> Baño privado</span>
                  </div>

                  <div className="benefit-grid">
                    {benefits.map(({ icon: Icon, label }) => (
                      <span key={label}><Icon size={16} />{label}</span>
                    ))}
                  </div>

                  <div className="room-perks-box">
                    <div className="perk-item">
                      <Sparkles size={15} />
                      <span>Desayuno incluido con café recién hecho</span>
                    </div>
                    <div className="perk-item">
                      <Clock3 size={15} />
                      <span>Recepción 24/7 y parqueo privado</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="button button--teal room-cta"
                    onClick={() => openBookingModal(`${currentRoom.title} (${currentRoom.beds} cama${currentRoom.beds > 1 ? 's' : ''})`)}
                  >
                    <MessageCircle size={17} /> Consultar disponibilidad <ArrowUpRight size={16} />
                  </button>
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
              const hasPhotos = Boolean(service.photos && service.photos.length > 0)
              return (
                <motion.article
                  key={service.title}
                  className={`service-card ${service.tone} ${hasPhotos ? 'service-card--clickable' : ''}`}
                  onClick={() => {
                    if (service.photos && service.photos.length > 0) {
                      setActiveLightbox({ items: service.photos, index: 0, title: service.title })
                    }
                  }}
                  role={hasPhotos ? 'button' : undefined}
                  tabIndex={hasPhotos ? 0 : undefined}
                  onKeyDown={
                    hasPhotos
                      ? (e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault()
                            setActiveLightbox({ items: service.photos!, index: 0, title: service.title })
                          }
                        }
                      : undefined
                  }
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                  variants={{ ...reveal, visible: { ...reveal.visible, transition: { ...reveal.visible.transition, delay: index * 0.07 } } }}
                >
                  {service.image && <SmartImage asset={service.image} />}
                  <div className="service-shade" />
                  <div className="service-icon"><Icon size={20} /></div>
                  <div className="service-content">
                    <div className="service-content-header">
                      <span>0{index + 1}</span>
                      {service.photos && service.photos.length > 1 && (
                        <span className="service-photos-badge">{service.photos.length} fotos</span>
                      )}
                    </div>
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                  </div>
                  <ArrowUpRight className="service-arrow" size={18} />
                </motion.article>
              )
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
              {gallery.map((image, index) => {
                const bentoClass = bentoPattern[index % bentoPattern.length] || ''
                return (
                  <motion.button
                    key={image.local}
                    className={`bento-item ${bentoClass}`}
                    onClick={() => setActiveLightbox({ items: gallery, index, title: 'Detalles & ambiente' })}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.12 }}
                    variants={{
                      ...reveal,
                      visible: {
                        ...reveal.visible,
                        transition: { ...reveal.visible.transition, delay: (index % 4) * 0.04 },
                      },
                    }}
                    aria-label={`Abrir imagen ${index + 1} de la galería`}
                  >
                    <SmartImage asset={image} />
                    <span className="gallery-overlay">
                      <MaximizeIcon />
                      <small>{index + 1 < 10 ? `0${index + 1}` : index + 1}</small>
                    </span>
                  </motion.button>
                )
              })}
            </div>
          </div>
        </section>

        <section id="ubicacion" className="location-section section-pad page-width">
          <motion.div className="location-copy" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.18 }} variants={reveal}>
            <span className="eyebrow"><i />Tu próxima pausa</span>
            <h2>Nos encuentras donde el camino se vuelve <i>tranquilo.</i></h2>
            <p>Estamos en La Entrada, Copán, un punto estratégico para descansar, recorrer la zona y seguir tu viaje con energía.</p>
            <div className="contact-list">
              <a href="tel:+50498881975">
                <span className="contact-icon"><Phone size={17} /></span>
                <span><small>Llámanos 24/7</small><strong>+504 9888-1975</strong></span>
                <ArrowUpRight size={17} />
              </a>
              <a href={consultWhatsapp} target="_blank" rel="noopener noreferrer">
                <span className="contact-icon"><MessageCircle size={17} /></span>
                <span><small>Escríbenos por WhatsApp</small><strong>Reservas directas</strong></span>
                <ArrowUpRight size={17} />
              </a>
              <a href={MAP_LINK} target="_blank" rel="noopener noreferrer">
                <span className="contact-icon"><Navigation size={17} /></span>
                <span><small>Visítanos</small><strong>La Entrada, Copán, Honduras</strong></span>
                <ArrowUpRight size={17} />
              </a>
            </div>
            <div className="location-actions">
              <a href={MAP_LINK} target="_blank" rel="noopener noreferrer" className="button button--teal">
                <Navigation size={16} /> Abrir en Google Maps <ArrowUpRight size={15} />
              </a>
              <a href={WAZE_LINK} target="_blank" rel="noopener noreferrer" className="button button--ghost-dark">
                <CarFront size={16} /> Abrir en Waze <ArrowUpRight size={15} />
              </a>
            </div>
          </motion.div>
          <motion.div className="map-card-interactive" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={reveal}>
            <iframe
              title="Mapa interactivo de ubicación de Hotel Tegucigalpa en La Entrada, Copán"
              src="https://www.google.com/maps?q=Hotel+Tegucigalpa,+La+Entrada,+Copan,+Honduras&output=embed"
              loading="lazy"
              allowFullScreen
            />
          </motion.div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="page-width footer-main">
          <div className="footer-brand"><a href="#inicio" className="brand" aria-label="Hotel Tegucigalpa, inicio"><img src={HOTEL_LOGO} alt="Hotel Tegucigalpa Logo" className="brand-logo" width={54} height={54} draggable={false} /><span className="brand-copy"><strong>Hotel</strong><em>Tegucigalpa</em></span></a><p>Tu espacio de confort,<br />elegancia y tranquilidad.</p></div>
          <div className="footer-nav"><span>Navegar</span><a href="#sobre-nosotros">Sobre nosotros</a><a href="#habitaciones">Habitaciones</a><a href="#galeria">Galería</a><a href="#ubicacion">Ubicación</a></div>
          <div className="footer-contact"><span>Contacto directo</span><a href="tel:+50498881975">+504 9888-1975</a><a href={consultWhatsapp} target="_blank" rel="noopener noreferrer">WhatsApp para reservas <ArrowUpRight size={14} /></a><small>Recepción abierta 24 horas</small></div>
          <button type="button" onClick={() => openBookingModal()} className="footer-cta"><MessageCircle size={20} /><span>Reserva tu<br /><b>próxima pausa</b></span><ArrowUpRight size={18} /></button>
        </div>
        <div className="page-width footer-bottom"><span>© {new Date().getFullYear()} Hotel Tegucigalpa. Todos los derechos reservados.</span><span>Hecho para descansar mejor en Copán <span className="gold-star">✦</span></span></div>
      </footer>

      <AnimatePresence>
        {activeLightbox !== null && (
          <motion.div
            className="lightbox"
            role="dialog"
            aria-modal="true"
            aria-label="Galería ampliada"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveLightbox(null)}
          >
            <button className="lightbox-close" onClick={() => setActiveLightbox(null)} aria-label="Cerrar galería">
              <X size={22} />
            </button>
            {activeLightbox.items.length > 1 && (
              <button
                className="lightbox-nav lightbox-nav--prev"
                onClick={(event) => {
                  event.stopPropagation()
                  setActiveLightbox((prev) => (prev ? { ...prev, index: (prev.index - 1 + prev.items.length) % prev.items.length } : null))
                }}
                aria-label="Imagen anterior"
              >
                ‹
              </button>
            )}
            <motion.div
              className="lightbox-content"
              key={`${activeLightbox.title}-${activeLightbox.index}`}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(event) => event.stopPropagation()}
            >
              <SmartImage asset={activeLightbox.items[activeLightbox.index]} loading="eager" />
              <span>
                {String(activeLightbox.index + 1).padStart(2, '0')} / {String(activeLightbox.items.length).padStart(2, '0')} · {activeLightbox.title || activeLightbox.items[activeLightbox.index].alt}
              </span>
            </motion.div>
            {activeLightbox.items.length > 1 && (
              <button
                className="lightbox-nav lightbox-nav--next"
                onClick={(event) => {
                  event.stopPropagation()
                  setActiveLightbox((prev) => (prev ? { ...prev, index: (prev.index + 1) % prev.items.length } : null))
                }}
                aria-label="Imagen siguiente"
              >
                ›
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {bookingModalOpen && (
          <motion.div
            className="booking-modal-overlay"
            role="dialog"
            aria-modal="true"
            aria-labelledby="booking-modal-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setBookingModalOpen(false)}
          >
            <motion.div
              className="booking-modal-card"
              initial={{ scale: 0.94, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 15 }}
              transition={{ duration: 0.28, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="booking-modal-close"
                onClick={() => setBookingModalOpen(false)}
                aria-label="Cerrar formulario de reserva"
              >
                <X size={20} />
              </button>

              <div className="booking-modal-header">
                <span className="eyebrow"><i />Reservas Directas</span>
                <h3 id="booking-modal-title">Consultar disponibilidad</h3>
                <p>Completa tus datos para confirmar disponibilidad directamente con nuestra recepción en La Entrada, Copán.</p>
              </div>

              <form className="booking-form" onSubmit={handleBookingSubmit}>
                {/* Campo Honeypot Anti-Bot (invisible para usuarios humanos, llena bots automatizados para abortar spam silenciosamente) */}
                <div
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    left: '-9999px',
                    top: '-9999px',
                    opacity: 0,
                    pointerEvents: 'none',
                    width: '1px',
                    height: '1px',
                    overflow: 'hidden',
                    zIndex: -1,
                  }}
                >
                  <label htmlFor="hp_hotel_verification">No llenar este campo de validación</label>
                  <input
                    type="text"
                    id="hp_hotel_verification"
                    name="hp_hotel_verification"
                    value={bookingForm.honeypot}
                    onChange={(e) => setBookingForm((prev) => ({ ...prev, honeypot: e.target.value }))}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="booking-name">Nombre completo *</label>
                    <input
                      type="text"
                      id="booking-name"
                      required
                      placeholder="Ej. Juan Pérez"
                      className="form-input"
                      value={bookingForm.name}
                      onChange={(e) => setBookingForm((prev) => ({ ...prev, name: e.target.value }))}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="booking-phone">Teléfono / WhatsApp *</label>
                    <input
                      type="tel"
                      id="booking-phone"
                      required
                      placeholder="Ej. +504 9888-1975"
                      className="form-input"
                      value={bookingForm.phone}
                      onChange={(e) => setBookingForm((prev) => ({ ...prev, phone: e.target.value }))}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="booking-room">Tipo de habitación</label>
                    <select
                      id="booking-room"
                      className="form-select"
                      value={bookingForm.roomType}
                      onChange={(e) => setBookingForm((prev) => ({ ...prev, roomType: e.target.value }))}
                    >
                      <option value="Habitación Sencilla (1 cama)">Habitación Sencilla (1 cama)</option>
                      <option value="Habitación Doble (2 camas)">Habitación Doble (2 camas)</option>
                      <option value="Habitación Triple (3 camas)">Habitación Triple (3 camas)</option>
                      <option value="Habitación Cuádruple (4 camas)">Habitación Cuádruple (4 camas)</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="booking-guests">Número de personas</label>
                    <select
                      id="booking-guests"
                      className="form-select"
                      value={bookingForm.guests}
                      onChange={(e) => setBookingForm((prev) => ({ ...prev, guests: e.target.value }))}
                    >
                      <option value="1 persona">1 persona</option>
                      <option value="2 personas">2 personas</option>
                      <option value="3 personas">3 personas</option>
                      <option value="4 a 6 personas">4 a 6 personas</option>
                      <option value="Grupo más de 6">Grupo (+6 personas)</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="booking-date">Fecha estimada de llegada</label>
                  <input
                    type="date"
                    id="booking-date"
                    className="form-input"
                    value={bookingForm.checkIn}
                    onChange={(e) => setBookingForm((prev) => ({ ...prev, checkIn: e.target.value }))}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="booking-notes">Comentarios o requerimientos</label>
                  <textarea
                    id="booking-notes"
                    placeholder="Hora estimada de llegada, parqueo o consulta especial..."
                    rows={2}
                    className="form-textarea"
                    value={bookingForm.notes}
                    onChange={(e) => setBookingForm((prev) => ({ ...prev, notes: e.target.value }))}
                  />
                </div>

                <button type="submit" className="form-submit-btn">
                  <MessageCircle size={17} /> Continuar a WhatsApp Oficial
                </button>

                <div className="booking-direct-fallback">
                  ¿Prefieres contactar sin formulario?{' '}
                  <a href={consultWhatsapp} target="_blank" rel="noopener noreferrer">
                    Escribir directo a WhatsApp
                  </a>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function MaximizeIcon() {
  return <span className="maximize-icon"><ArrowUpRight size={15} /></span>
}

export default App
