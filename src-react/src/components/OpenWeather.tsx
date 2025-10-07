/**
 * ① importとAPIキー
 */
import { useState } from 'react';
import axios from 'axios';

const API_KEY = '*********************';

/**
 * ② JSON用インターフェース
 */
interface WeatherData {
    "weather": [
        {
            "description": string;  // 天気の説明
            "icon": string;         // アイコン番号
        }
    ],
    "main": {
        "temp": number;             // 気温
    }
}

/**
 * ③ 関数 OpenWeatherの定義
 */
function OpenWeather() {
    // ④ useStateの宣言
    const [city, setCity] = useState('Tokyo');
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

    // ⑤ 天気データの取得処理
    const fetchWeatherData = async () => {
        try {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=ja`
            );
            setWeatherData(response.data);
        }
        catch (e) {
            console.error('データ取得失敗:', e);
        }
    };

    // ⑥ 取得データの表示処理
    return (
        <>
            <input
                type="text"
                placeholder="地域名を入力してください"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <button onClick={fetchWeatherData}>天気取得</button>

            {weatherData && (
                <div>
                    <h2>{city}のお天気</h2>
                    <p><img src={'https://openweathermap.org/img/w/' + weatherData.weather[0].icon + '.png'} alt="icon" /></p>
                    <p>天気： {weatherData.weather[0].description}</p>
                    <p>気温： {weatherData.main.temp}℃</p>
                </div>
            )}
        </>
    );
}

export default OpenWeather;
