import dayjs from "dayjs"
import { openingHours } from "../../utils/opening-hours.js"
import { hoursClick } from "./hours-click.js"

export function hoursLoad({ date }){
    // limpa lista de horarios
    hours.innerHTML = ""

    const opening = openingHours.map((hour) => {
        // Recupera somente a hora
        const [scheduleHour] = hour.split(":")

        // adiciona a hora na date e verificar se está no passado
        const isHourPast = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs())
        
        
        // define se o horário está disponível
        return {
          hour,
          available: isHourPast,  
        }
    })

    //renderizar os horários
    opening.forEach(({ hour, available }) => {
        const li = document.createElement("li")

        li.classList.add("hour")
        li.classList.add(available ? "hour-available" : "hour-unavailable")

        li.textContent = hour

        if (hour === "9:00"){
            hourHeaderAdd("Manhã")
        } else if (hour === "13:00"){
            hourHeaderAdd("Tarde")
        } else if (hour === "18:00"){
            hourHeaderAdd("Noite")
        }
        hours.append(li)
    })

    // adiciona evento de click nos horários
    hoursClick()
}

function hourHeaderAdd(title){
    const header = document.createElement("li")
    header.classList.add("hour-period")
    header.textContent = title

    hours.append(header)
}