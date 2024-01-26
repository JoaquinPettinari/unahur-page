import { useState } from "preact/hooks";
import { CAREER_LIST } from "../../mockData/careers";

export default function CareerList() {
  const [activeCard, setActiveCard] = useState(CAREER_LIST[0].id);

  return (
    <div class="flex gap-6">
      {CAREER_LIST.map((career, index) => {
        const { id, icon, name } = career;
        return (
          <div
            class="flex flex-col items-center shadow-xl h-72, w-48 p-4"
            onClick={() => setActiveCard(id)}
            key={index}
          >
            <img src={icon.src} alt="Icon of career" class="w-16 h-16 mb-2" />
            <h2 class="text-xl font-bold">{name}</h2>
          </div>
        );
      })}
    </div>
  );
}
