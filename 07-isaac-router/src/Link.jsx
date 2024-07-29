import { BUTTONS, EVENTS } from "./conts"

export function navigate (href) {
    window.history.pushState({}, '', href)
    const navigationEvent = new Event(EVENTS.PUSHSTATE)
    window.dispatchEvent(navigationEvent)
  }
    
export function Link ({ target, to, ...props}) {
  const handleClick = () => {
    const isMainEvent = event.button === BUTTONS.primary
    const isModifiedEvent = event.metaKey || event.altKey || event.shiftKey
    const isManageableEvent = target=== undefined || target === '_self'

    if (isMainEvent && isManageableEvent && isModifiedEvent) {
      event.preventDefault()
      navigate(to)
    }
  }

  return <a onClick={handleClick} href={to} target={target} {...props} />
}