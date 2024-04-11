import hands from '../assets/hands.png';

function Navbar() {
    //semplicissima navabr
    return (
        <div className="w-full my-auto bg-white p-5 flex mb-5">
            <p className="font-semibold text-xl my-auto">Call Center Stats</p>
            <img src={hands} className="w-8 ml-2" />
        </div>
    );
}

export default Navbar;
