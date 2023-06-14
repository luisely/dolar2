import { format, parseISO } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export function formatDate(date: string) {
  return format(parseISO(date), 'd/MM/yyyy HH:mm', {
    locale: ptBR
  })
}