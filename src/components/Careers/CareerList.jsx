import { useState, useMemo } from "preact/hooks";
import { CAREER_LIST } from "../../mockData/careers";

export default function CareerList() {
  const [activeCardId, setActiveCardId] = useState(CAREER_LIST[0].id);

  const activeCard = useMemo(() => {
    return CAREER_LIST?.find((career) => career.id === activeCardId)
  }, [activeCardId])

  return (
    <div class="flex justify-center flex-wrap gap-6">
      {CAREER_LIST.map((career, index) => {
        const { id, icon, name } = career;
        return (
          <div
            class={`flex flex-col items-center h-72, w-48 p-4 cursor-pointer rounded-2xl ${
              activeCardId === id ? "shadow-2xl" : ""
            }`}
            onClick={() => setActiveCardId(id)}
            key={index}
          >
            <img src={icon.src} alt="Icon of career" class="w-16 h-16 mb-2" />
            <h2 class="text-xl font-bold">{name}</h2>
          </div>
        );
      })}
      <div class="rounded-2xl shadow-xl w-full" >
        <div class="w-4/4 lg:w-2/4">
          <p class="primary-color text-xl font-bold">{activeCard.name}</p>
        </div>
        <div class="w-4/4 lg:w-2/4">

        </div>
      </div>
    </div>
  );
}
