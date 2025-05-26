import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"

interface ShortcutsDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

const ShortcutsDialog = ({
    open,
    onOpenChange,
}: ShortcutsDialogProps) => {

    const keyboardShortcuts = [
        { key: ['m', 'or', 'M'], action: 'Toggle Dark/Light Mode' },
        { key: ['h', 'or', 'H'], action: 'Go to Home Page' },
        { key: ['p', 'or', 'P'], action: 'Go to Projects Page' },
        { key: ['a', 'or', 'A'], action: 'Go to About Page' },
        { key: ['ctrl', '+', '/'], action: 'Show Shortcuts' },
        { key: ['Backspace'], action: 'Go Back  <- ' },
    ]

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-lg border-0 bg-white/80 dark:bg-black/40 backdrop-blur-lg shadow-xl rounded-3xl">
                <DialogHeader className="text-center pb-2">
                    <DialogTitle className="text-xl font-semibold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                        Keyboard Shortcuts
                    </DialogTitle>
                    <DialogDescription className="text-sm text-muted-foreground/80">
                        Navigate faster with these keyboard combinations
                    </DialogDescription>
                </DialogHeader>

                <div className="space-y-3 py-2">
                    {keyboardShortcuts.map((shortcut, index) => (
                        <div key={index} className="flex items-center justify-between group hover:bg-muted/30 rounded-lg px-3 py-2.5 transition-all duration-200 hover:shadow-sm cursor-default">
                            <span className="text-sm text-foreground/70 group-hover:text-foreground transition-colors duration-200 font-medium">
                                {shortcut.action}
                            </span>
                            <div className="flex items-center space-x-2">
                                {shortcut.key.map((key, idx) => (
                                    <ButtonUI key={idx} keyName={key} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-4 pt-4 border-t border-border/30">
                    <p className="text-xs text-center text-muted-foreground/80 mb-4">
                        💡 Easter egg → try opening devtool console window
                    </p>
                    <p className="text-xs text-center text-muted-foreground/60 flex items-center justify-center gap-2">
                        Press <EscKey /> to close
                    </p>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default ShortcutsDialog

const ButtonUI = ({ keyName }: { keyName: string }) => {
    if (keyName === '+') return (<span className="text-muted-foreground/60 text-sm font-medium">+</span>)
    else if (keyName === 'or') return (<span className="text-muted-foreground/50 text-xs">or</span>)

    return (
        <kbd className="inline-flex items-center justify-center bg-muted/50 backdrop-blur-sm border border-border/40 text-foreground/90 px-2.5 py-1.5 rounded-md shadow-sm hover:bg-muted/70 hover:border-border/60 transition-all duration-200 text-sm font-medium min-w-[32px] hover:scale-105">
            {keyName}
        </kbd>
    )
}

const EscKey = () => (
    <kbd className="inline-flex items-center justify-center bg-muted/40 backdrop-blur-sm border border-border/30 text-foreground/70 px-2 py-0.5 rounded text-xs font-medium">
        esc
    </kbd>
)
