import campeaoImage from '@/assets/campeao.webp';

export function ChampionCharacter() {
    return (
        <div className="absolute left-24 bottom-64 z-20 hidden lg:block">
            <img
                src={campeaoImage}
                alt="Campeão"
                className="w-72 h-auto xl:w-96 drop-shadow-2xl scale-[1.5]"
            />
        </div>
    );
}
