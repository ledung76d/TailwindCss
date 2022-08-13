import { useState } from 'react';
import { BiHomeAlt, BiMoviePlay, BiInfoCircle, BiMenu } from 'react-icons/bi';
import NavItem from './NavItem';
const defaultIconSize = '1.875rem';

const items = [
    { label: 'Home', icon: <BiHomeAlt size={defaultIconSize} />, active: true },
    { label: 'Movies', icon: <BiMoviePlay size={defaultIconSize} /> },
    { label: 'About', icon: <BiInfoCircle size={defaultIconSize} /> },
]

const NavItemsContiner = () => <>
    {items.map((item, index) => <NavItem item={item} key={index} />)}
</>

const Index = () => {
    const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);

    return <nav className="col-span-1 bg-cyan-200">
        <div className="flex mx-4 justify-between items-center md:block">
            <h4 className="uppercase font-bold text-primary py-4 border-primary border-b text-right text-2xl">Phimmoi.net</h4>
            <span className="cursor-pointer md:hidden text-3xl">
                <BiMenu onClick={() => setIsNavMenuOpen(!isNavMenuOpen)} />

            </span>
        </div>
        <ul className={`mx-4 my-2  ${isNavMenuOpen ? '' : ' hidden'} md:block`}>
            <NavItemsContiner />
        </ul>
    </nav>
}
export default Index