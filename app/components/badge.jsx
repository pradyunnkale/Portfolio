import '../globals.css';
export default function Badge({children}) {
    return (
        <span className='bg-[#a89877] text-white font-bold px-3 py-1 text-xs rounded-full border border-[#a89877]/50 hover:bg-[#9e8a6d] hover:border-[#]/50 transition-colors duration-300 text-black'>
            {children}
        </span>
    );
}