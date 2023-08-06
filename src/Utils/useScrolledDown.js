import {useEffect,useRef,useState} from 'react'

export default function useScrollPosition() {
    const [scrollPosition, setScrollPosition] = useState(false)
    const navRef = useRef()
    navRef.current = scrollPosition
    useEffect(() => {
      const handleScroll = () => {
        const show = window.scrollY > 30
        if (navRef.current !== show) {
          setScrollPosition(show)
        }
      }
      document.addEventListener('scroll', handleScroll)
      return () => {
        document.removeEventListener('scroll', handleScroll)
      }
    }, [])

    return scrollPosition
}