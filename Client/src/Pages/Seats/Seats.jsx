import GoldClass from '../../components/GoldClass/GoldClass';
import PlatinumClass from '../../components/PlatinumClass/PlatinumClass';
import SilverClass from '../../components/SilverClass/SilverClass';
import Screen from '../../components/Screen/Screen';
import NavBar from '../../components/Navbar/Navbar';

const Seats = () => {
  return (
    <>
      <NavBar />
      <Screen />
      <SilverClass/>
      <GoldClass />
      <PlatinumClass/>
    </>
  );
};

export default Seats;
