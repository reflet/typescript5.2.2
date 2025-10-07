import Title from './Title';
import Counter from './Counter';
import OpenWeather from './OpenWeather';

function MainPage() {
    return (
        <>
            <Title />
            <Counter />

            <hr />

            <h1>お天気アプリ</h1>
            <OpenWeather />
        </>
    );
}

export default MainPage;
