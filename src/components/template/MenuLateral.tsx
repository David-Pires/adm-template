import { IconeCasa, IconeAjustes, IconeSino } from "../icons";
import MenuItem from "./MenuItem";
import Logo from "./Logo"

export default function MenuLateral() {
  return (
    <aside>
      <div className={`
        flex
        flex-col
        items-center
        justify-content
        bg-gradient-to-r
        from-indigo-500
        to-purple-800
        h-20
        w-20
      `}>
        <Logo />
      </div>
      <ul>
        
        <MenuItem url="/" texto="Início" icone={IconeCasa} />
        <MenuItem url="/ajustes" texto="Ajustes" icone={IconeAjustes} />
        <MenuItem url="/notificacoes" texto="notificações" icone={IconeSino}/>
      </ul>
    </aside>
  );
}
