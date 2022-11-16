export class Weather {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.temp = data.main.temp;
    this.cTemp = (data.main.temp - 273.15).toFixed();
    this.fTemp = ((data.main.temp - 273.15) * 1.8 + 32).toFixed();
    this.toggle = true;
    // this.icon = data.weather.icon;
  }
  get CTemplate() {
    return `
    <div class="col-md-4 d-flex text-light weather justify-content-end">
      <div>
        <p onclick="app.weatherController.toggleWeather()" id="toggle">${this.cTemp} C</p>
        <p>${this.name}</p>
      </div>
    </div>
    `;
  }

  get FTemplate() {
    return `
    <div class="col-md-4 d-flex text-light weather justify-content-end">
      <div>
        <p onclick="app.weatherController.toggleWeather()" id="toggle">${this.fTemp} F</p>
        <p>${this.name}</p>
      </div>
    </div>
    `;
  }
}
