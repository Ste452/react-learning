
import { useState, useEffect } from "react";

function RelogioDigital() {
    const [horario, setHorario] = useState(new Date());

    useEffect(() => {
        // Atualiza o horário a cada segundo
        const intervalo = setInterval(() => {
            setHorario(new Date());
        }, 1000);

        // Executa apenas uma vez, na montagem do componente


        // Clenup: Limpa o intervalo ao desmontar o componente
        return () => clearInterval(intervalo);
    }, []);

    return (
      <div>
        <p>Relógio Digital</p>
        <p>
          {horario.toLocaleTimeString()}
        </p>
      </div>
    );
  }

export default RelogioDigital