let logoUrl = "https://pbs.twimg.com/profile_images/684410783321690112/0lb0ae3__400x400.jpg";
let imgLogo = (logoUrl) => {
    return <img src={logoUrl} alt="Logo" />;
  }
const buttonElements = ['MY ACCOUNT', 'CARDS', 'TRAVEL', 'INSURANCE', 'REWARDS', 'BUSINESS']
const listButtons = buttonElements.map((button) =>
<a href=""><div className="button-element">{button}</div></a>
);
let header = (
<div className="header header-flex">
    <div className="logo">
        {imgLogo(logoUrl)}
    </div>
    <div className="buttons-header">
        {listButtons}
    </div>
</div>
);

const travelChecklist = ['Italian Express travel cecklist', 'Get travel insurance'];
const moreTravelServices = ['Membership Rewards', 'Italian Express sitemap', 'Mobile travel site'];
const moreTravelSupport = ['Travel support', 'My bookings', 'Need emergency when abroad?'];
const travelChecklistLink = travelChecklist.map(link) =>
<li><a href=""><div>{link}</div></a></li>
);
const moreTravelServicesLink = moreTravelServices.map(link) =>
<li><a href=""><div>{link}</div></a></li>
);
const moreTravelSupportLink = moreTravelSupport.map(link) =>
<li><a href=""><div>{link}</div></a></li>
);

const services = (
  <div className="flex-tc">
    <div>
      <p>Travel Checklist</p>
      <ul>
        {travelChecklist}
      </ul>
    </div>
    <div>
      <p>Travel Checklist</p>
      <ul>
        {moreTravelServicesLink}
      </ul>
    </div>
    <div>
      <p>Travel Checklist</p>
      <ul>
        {moreTravelSupportLink}
      </ul>
    </div>
  </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(header, appRoot);
