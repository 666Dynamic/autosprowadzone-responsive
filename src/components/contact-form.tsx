"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Send, Search, Car, Calendar, Wallet, CheckCircle2 } from "lucide-react"

interface ContactFormProps {
    mode?: "simple" | "search" | "weryfikacja"
    title?: string
    description?: string
    showLabels?: boolean
    className?: string
}

export function ContactForm({
    mode = "simple",
    title,
    description,
    showLabels = true,
    className
}: ContactFormProps) {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500))
        setIsSubmitting(false)
        setIsSuccess(true)
    }

    if (isSuccess) {
        return (
            <Card className={`w-full bg-card dark:bg-slate-950/50 backdrop-blur-sm border-2 border-emerald-500/50 shadow-2xl rounded-[3rem] overflow-hidden ${className}`}>
                <CardContent className="p-12 text-center space-y-6">
                    <div className="w-20 h-20 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-3xl font-black uppercase tracking-tighter">Wiadomość wysłana!</h3>
                    <p className="text-muted-foreground font-medium">Dziękujemy za kontakt. Nasz ekspert odezwie się do Ciebie w ciągu 24 godzin.</p>
                    <Button
                        onClick={() => setIsSuccess(false)}
                        variant="outline"
                        className="rounded-xl font-bold uppercase tracking-widest"
                    >
                        Wyślij kolejną
                    </Button>
                </CardContent>
            </Card>
        )
    }

    const defaultTitles = {
        simple: "Napisz do nas",
        search: "Zlecenie Wyszukiwania",
        weryfikacja: "Zleć Weryfikację"
    }

    const defaultDescriptions = {
        simple: "Gwarantujemy odpowiedź w ciągu 24 godzin.",
        search: "Bezpłatna weryfikacja rynku • Odpowiedź w 24h",
        weryfikacja: "Pełny audyt mechaniczny i wizualny w całych Niemczech."
    }

    return (
        <Card className={`w-full bg-card dark:bg-slate-900/80 backdrop-blur-sm border-2 border-primary/20 shadow-2xl rounded-[3rem] overflow-hidden transition-all duration-300 hover:border-primary/40 hover:shadow-primary/5 ${className}`}>
            <CardHeader className="bg-primary p-8 md:p-10 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10 rotate-12 bg-white rounded-full translate-x-12 -translate-y-12 w-48 h-48 pointer-events-none" />
                <CardTitle className="text-2xl md:text-4xl font-black uppercase tracking-tighter flex items-center gap-3 relative z-10">
                    {mode === "search" ? <Search className="w-8 h-8" /> : (mode === "weryfikacja" ? <Car className="w-8 h-8" /> : <Send className="w-8 h-8" />)}
                    {title || defaultTitles[mode]}
                </CardTitle>
                <CardDescription className="text-white/80 font-bold text-xs md:text-sm uppercase tracking-widest mt-2 relative z-10">
                    {description || defaultDescriptions[mode]}
                </CardDescription>
            </CardHeader>
            <CardContent className="p-8 md:p-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                    {mode === "search" ? (
                        <>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    {showLabels && <Label htmlFor="brand" className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">Marka pojazdu</Label>}
                                    <Input id="brand" placeholder="np. Mercedes-Benz" required className="h-14 px-5 rounded-2xl border-2 border-muted focus-visible:ring-primary focus-visible:border-primary font-bold bg-muted/40 dark:bg-slate-800/50" />
                                </div>
                                <div className="space-y-2">
                                    {showLabels && <Label htmlFor="model" className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">Model / Seria</Label>}
                                    <Input id="model" placeholder="np. GLC Coupe" required className="h-14 px-5 rounded-2xl border-2 border-muted focus-visible:ring-primary focus-visible:border-primary font-bold bg-muted/40 dark:bg-slate-800/50" />
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    {showLabels && <Label htmlFor="year" className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">Rok produkcji (od)</Label>}
                                    <div className="relative">
                                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                        <Input id="year" type="number" placeholder="2020" className="h-14 pl-12 pr-5 rounded-2xl border-2 border-muted focus-visible:ring-primary focus-visible:border-primary font-bold bg-muted/40 dark:bg-slate-800/50" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    {showLabels && <Label htmlFor="budget" className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">Budżet (waluta)</Label>}
                                    <div className="relative">
                                        <Wallet className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                        <Input id="budget" placeholder="np. 200 000 PLN" className="h-14 pl-12 pr-5 rounded-2xl border-2 border-muted focus-visible:ring-primary focus-visible:border-primary font-bold bg-muted/40 dark:bg-slate-800/50" />
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-2">
                                {showLabels && <Label htmlFor="phone" className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">Telefon Kontaktowy</Label>}
                                <Input id="phone" type="tel" placeholder="+48 123 456 789" required className="h-14 px-5 rounded-2xl border-2 border-muted focus-visible:ring-primary focus-visible:border-primary font-bold bg-muted/30" />
                            </div>
                            <div className="space-y-2">
                                {showLabels && <Label htmlFor="message" className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">Wyposażenie i dodatkowe uwagi</Label>}
                                <Textarea id="message" placeholder="Opisz swoje potrzeby, np. M-Pakiet, Panorama, Hak..." className="min-h-[120px] px-5 py-4 rounded-2xl border-2 border-muted focus-visible:ring-primary focus-visible:border-primary font-bold bg-muted/40 dark:bg-slate-800/50" />
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    {showLabels && <Label htmlFor="name" className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">Imię i Nazwisko</Label>}
                                    <Input id="name" placeholder="Jan Kowalski" required className="h-14 px-5 rounded-2xl border-2 border-muted focus-visible:ring-primary focus-visible:border-primary font-bold bg-muted/40 dark:bg-slate-800/50" />
                                </div>
                                <div className="space-y-2">
                                    {showLabels && <Label htmlFor="phone" className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">Telefon</Label>}
                                    <Input id="phone" type="tel" placeholder="+48 123 456 789" required className="h-14 px-5 rounded-2xl border-2 border-muted focus-visible:ring-primary focus-visible:border-primary font-bold bg-muted/40 dark:bg-slate-800/50" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                {showLabels && <Label htmlFor="email" className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">Email (Opcjonalnie)</Label>}
                                <Input id="email" type="email" placeholder="jan@kowalski.pl" className="h-14 px-5 rounded-2xl border-2 border-muted focus-visible:ring-primary focus-visible:border-primary font-bold bg-muted/40 dark:bg-slate-800/50" />
                            </div>
                            <div className="space-y-2">
                                {showLabels && <Label htmlFor="link" className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">Link do ogłoszenia (Mobile.de / Autoscout24)</Label>}
                                <Input id="link" placeholder="Wklej link jeśli masz już wybrane auto..." type="url" className="h-14 px-5 rounded-2xl border-2 border-muted focus-visible:ring-primary focus-visible:border-primary font-bold bg-muted/40 dark:bg-slate-800/50" />
                            </div>
                            <div className="space-y-2">
                                {showLabels && <Label htmlFor="message" className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">Wiadomość</Label>}
                                <Textarea id="message" placeholder="Dzień dobry, proszę o kontakt w sprawie..." className="min-h-[120px] px-5 py-4 rounded-2xl border-2 border-muted focus-visible:ring-primary focus-visible:border-primary font-bold bg-muted/40 dark:bg-slate-800/50" required />
                            </div>
                        </>
                    )}

                    <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-primary text-white hover:bg-slate-900 transition-all duration-300 text-lg h-16 rounded-2xl font-black uppercase tracking-widest shadow-2xl shadow-primary/20 group"
                    >
                        {isSubmitting ? "Wysyłanie..." : "Wyślij Zgłoszenie"}
                        {!isSubmitting && <Send className="ml-3 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                    </Button>
                    <p className="text-center text-[9px] text-muted-foreground font-bold uppercase tracking-tighter">
                        Wysyłając zgłoszenie akceptujesz politykę prywatności. Dane są przetwarzane wyłącznie w celu obsługi zapytania.
                    </p>
                </form>
            </CardContent>
        </Card>
    )
}
