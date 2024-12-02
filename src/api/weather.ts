import { API_CONFIG } from "./config"
import { Coordinates, WeatherData } from "./types";

class WEATHERAPI {
    private createUrl(endpoint: string, params: Record <string, string | number>) {
        const searchParams = new URLSearchParams({
            appid : API_CONFIG.API_KEY, 
            ...params,
        })
        return `${endpoint} ? ${ searchParams.toString()}`
    } // this private function cannot be accessed from outside this adds a layer of privacy to our code.}
// we have two endpoints..baseUrl and GEO in config.ts
// Recod types means that "params" will be an object with "key" as string and "value" can either be string or a number

    private async fetchData <T> (url: string): Promise <T> { // here <T> means that the type can be of a dynamic type
        const response = await fetch(url);
        if(!response.ok) {
            throw new Error(`Weather API Error: ${response.statusText}`)
        }
        return response.json()
    }

    async getCurrentWeather({ lat, lon } : Coordinates): Promise <WeatherData> {
        const url = this.createUrl(`${API_CONFIG.BASE_URL}/weather`, {
            lat: lat.toString(),
            lon: lon.toString(),
            units: API_CONFIG.DEFAULT_PARAMS.units,
        });

        return this.fetchData<WeatherData>(url)
    }

    async getForecast() {}

    async reverseGeocode() {}
}