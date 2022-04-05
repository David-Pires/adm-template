import MenuLateral from './MenuLateral'
import Cabecalho from './Cabecalho'


interface LayoutProps {
  titulo: string 
  subtitulo: string 
  children?: any
}
export default function Layout(props: LayoutProps) {
  return (
    <div>
      <MenuLateral/>
      <Cabecalho titulo={props.titulo}
                subtitulo={props.subtitulo}/>
    </div>
  )
}