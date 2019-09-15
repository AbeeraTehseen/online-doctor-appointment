import React from 'react'
const cities = ['Karachi', 'Lahore', 'Islamabad', 'Peshawar', 'Quetta']
const speciality =[ "ENT", "dermatoligist", "ChildSpecialist", "Neurologist", "Cardiologists", "EyeSpecialist", "Dentist","Gynecologist"]
export class Selection extends React.Component {
  constructor(props) {
    super(props);

    this._handleChange = this._handleChange.bind(this);
    this._changeTimezone = this._changeTimezone.bind(this);
    this._specialityChange =this._specialityChange.bind(this)
    this._changeSpeciality =this._changeSpeciality.bind(this)
    const {city, specialization} = this.props;
    this.state = {city, specialization};
  }

  _handleChange(evt) {
    typeof this.props.onFormChange === 'function' &&
      this.props.onFormChange(this.state);
  }
  _specialityChange(evt){
    typeof this.props.onFormChange === 'function' &&
      this.props.onFormChange(this.state);
  }
  _changeTimezone(evt) {
    const city = evt.target.value;
    this.setState({city}, this._handleChange);
  }
  _changeSpeciality(evt) {
    const specialization = evt.target.value;
    this.setState({specialization}, this._specialityChange);
  }
  render() {
    const {city} = this.state;
    const {specialization} = this.state;

    return (
      <form >
        <select className ="option"
          onChange={this._changeTimezone}
          defaultValue={city}>
          {cities.map(t => {
            return (<option key={t} value={t}>{t}</option>)
          })}
        </select>
        <select className ="option"
          onChange={this._changeSpeciality}
          defaultValue={specialization}>
          {speciality.map(t => {
            return (<option key={t} value={t}>{t}</option>)
          })}
        </select>

      </form>
    )
  }
}

export default Selection;