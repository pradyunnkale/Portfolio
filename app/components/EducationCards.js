import Badge from '../components/badge'
import Card from '../components/card'

export default function EducationCards({Name, Date, Title, Body, Badges = []}){
    return(
        <div className="flex-1 flex justify-center w-full md:w-[75%]">
            <Card
              title={
                <div className="flex justify-between items-center">
                  <span className="text-[#cfb991]">{Name}</span>
                  <p className="font-normal text-sm">{Date}</p>
                </div>
              }
            >
              <h3 className="text-center font-bold text-2xl mb-2">
                {Title}
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed space-y-2">
                {Body}
              </p>
              <div className="flex-wrap flex gap-2 mt-4">
                {Badges.map((badge, idx) => (
                    <Badge key={idx}>{badge}</Badge>
                ))}
              </div>
            </Card>
        </div>
    );
}