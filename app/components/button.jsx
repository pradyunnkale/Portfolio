import Link from 'next/link'

export default function Button({Name, Landing, Type, external = false, Icon}){
    if (external){
        return(
          <a
            href={Landing}
            className={Type}
            target='_blank'
            rel='noopener noreferrer'
          >
            {Icon && <span className='flex-wrap mr-2 flex-row'>{Icon}</span>}
            {Name}
          </a>  
        );
    }
    return(
        <Link href={Landing} className={Type}>
            {Icon && <span className='flex-wrap mr-2 flex-row'>{Icon}</span>}
            {Name}
        </Link>
    );
}