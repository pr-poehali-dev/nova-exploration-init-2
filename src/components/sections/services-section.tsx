import { useReveal } from "@/hooks/use-reveal"
import Icon from "@/components/ui/icon"

export function ServicesSection() {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-6 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-10 transition-all duration-700 md:mb-14 ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-sans text-5xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Услуги
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">/ Полный цикл: от идеи до сертификации</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 md:gap-x-16 md:gap-y-10 lg:gap-x-24">
          {[
            {
              icon: "PenTool",
              title: "Проектирование освещения",
              description:
                "Разрабатываем проекты для офисов, медцентров, образования и коммерции с учётом циркадных ритмов, контроля бликов (UGR) и спектральных характеристик.",
              direction: "top",
            },
            {
              icon: "Lightbulb",
              title: "Производство оборудования",
              description:
                "Выпускаем архитектурные LED, биодинамические и акустические светильники с высоким CRI (≥90), без мерцания и с поддержкой меланопической освещённости (EML).",
              direction: "right",
            },
            {
              icon: "Cpu",
              title: "Умное управление",
              description:
                "Внедряем системы автоматического изменения цветовой температуры и яркости, интеграцию с датчиками и системами «умного здания».",
              direction: "left",
            },
            {
              icon: "Settings2",
              title: "Монтаж и пусконаладка",
              description:
                "Осуществляем поставку, монтаж и тонкую настройку световых сценариев с последующей проверкой всех параметров.",
              direction: "bottom",
            },
            {
              icon: "BadgeCheck",
              title: "Поддержка сертификации WELL",
              description:
                "Помогаем девелоперам и архитекторам получить сертификат: готовим lighting-расчёты и замеры melanopic lux.",
              direction: "top",
            },
          ].map((service, i) => (
            <ServiceCard key={i} service={service} index={i} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({
  service,
  index,
  isVisible,
}: {
  service: { icon: string; title: string; description: string; direction: string }
  index: number
  isVisible: boolean
}) {
  const getRevealClass = () => {
    if (!isVisible) {
      switch (service.direction) {
        case "left":
          return "-translate-x-16 opacity-0"
        case "right":
          return "translate-x-16 opacity-0"
        case "top":
          return "-translate-y-16 opacity-0"
        case "bottom":
          return "translate-y-16 opacity-0"
        default:
          return "translate-y-12 opacity-0"
      }
    }
    return "translate-x-0 translate-y-0 opacity-100"
  }

  return (
    <div
      className={`group transition-all duration-700 ${getRevealClass()}`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className="mb-3 flex items-center gap-3">
        <div className="h-px w-8 bg-foreground/30 transition-all duration-300 group-hover:w-12 group-hover:bg-foreground/50" />
        <Icon name={service.icon} fallback="Star" size={14} className="text-foreground/60" />
        <span className="font-mono text-xs text-foreground/60">0{index + 1}</span>
      </div>
      <h3 className="mb-2 font-sans text-xl font-light text-foreground md:text-2xl">{service.title}</h3>
      <p className="max-w-sm text-sm leading-relaxed text-foreground/80 md:text-base">{service.description}</p>
    </div>
  )
}