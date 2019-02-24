import HttpClient from '../server/httpClient';

export function onChange(checked) {
  this.setState({ activeSwitch: checked });
}

export function onClick(checked) {
  HttpClient.Post('/cat', { count: 3 })
    .then(data => {
      console.log(data);
    });

}