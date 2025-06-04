
const ShortcutHint = () => {
  return (
    <div className="fixed bottom-4 right-4 z-50 animate-in slide-in-from-bottom-2 fade-in duration-500">
      <div className="bg-background/80 backdrop-blur-sm border border-border/40 rounded-lg px-3 py-2 shadow-lg">
        <p className="text-xs text-muted-foreground flex items-center gap-2">
          💡 Press
          <kbd className="px-1.5 py-0.5 bg-muted rounded text-xs">Ctrl</kbd>
          <span>+</span>
          <kbd className="px-1.5 py-0.5 bg-muted rounded text-xs">/</kbd>
          for shortcuts
        </p>
      </div>
    </div>
  )
}

export { ShortcutHint }
