import Image from 'next/image'
import Card from './card'
import Badge from './badge'

export default function ProjectCards({ Title, Body, GitHub, Video, Badges = []}) {
    return (
      <Card className="flex flex-col h-full">
        <Image
          src="/assets/self-balancing-robot.jpg"
          alt=""
          width={400}
          height={200}
          className="w-full h-40 object-cover rounded-t-lg mb-4"
        />
        <h2 className="block text-center font-bold text-xl mb-2">
          {Title}
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed space-y-2 flex-grow">
          {Body}
        </p>
        <div className="flex flex-col lg:flex-row items-center gap-2 mt-4">
          <div className="flex flex-row md:flex-wrap gap-2">
            {Badges.map((badge, idx) => (
              <Badge key={idx}>{badge}</Badge>
            ))}
          </div>
          <div className="flex gap-2 flex-row md:flex-wrap lg:ml-auto">
            <a
              href={GitHub}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary px-2 py-1 text-xs"
              aria-label="GitHub"
            >
              <svg
                className="inline w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.45.11-3.02 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 2.92-.39c.99 0 1.99.13 2.92.39 2.22-1.49 3.2-1.18 3.2-1.18.63 1.57.23 2.73.11 3.02.74.8 1.19 1.83 1.19 3.09 0 4.43-2.7 5.41-5.27 5.7.42.36.79 1.08.79 2.18 0 1.58-.01 2.85-.01 3.24 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z" />
              </svg>
            </a>
            <a
              href={Video}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary px-2 py-1 text-xs"
              aria-label="Video"
            >
              <svg
                className="inline w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M21.8 8.001a2.752 2.752 0 0 0-1.94-1.94C18.2 6 12 6 12 6s-6.2 0-7.86.061a2.752 2.752 0 0 0-1.94 1.94C2 9.661 2 12 2 12s0 2.339.2 3.999a2.752 2.752 0 0 0 1.94 1.94C5.8 18 12 18 12 18s6.2 0 7.86-.061a2.752 2.752 0 0 0-1.94-1.94C22 14.339 22 12 22 12s0-2.339-.2-3.999zM10 15V9l6 3-6 3z" />
              </svg>
            </a>
          </div>
        </div>
      </Card>
    );
}