import { BiHomeAlt, BiMoviePlay, BiInfoCircle } from 'react-icons/bi';
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
    return <nav className="col-span-1 bg-cyan-200">
        <div className="mx-4 justify-between items-center">
            <h4 className="uppercase font-bold text-primary py-4 border-primary border-b text-right text-2xl">Phimmoi.net</h4>
        </div>
        <ul className="mx-4 my-2">
            <NavItemsContiner />


        </ul>
    </nav>
}
export default Index