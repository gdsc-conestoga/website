import ExternalLink from "../../components/externalLink/ExternalLink"

function Resources() {
  return (
    <div>
      <h1>Useful Resources</h1>
      <div>The following links might be of interest to club members</div>
      <br />
      <div className="links">
        <ExternalLink 
          url='https://gdsc.community.dev/conestoga-college-waterloo-campus/' 
          explanation='GDSC Portal - a place where all of our events are hosted' />
        <ExternalLink 
          url='https://conestogastudents.com/2021/09/01/coding-club/' 
          explanation='CSI Club - register for the official GDSC Conestoga CSI club' />
        <ExternalLink 
          url='https://www.youtube.com/channel/UCBbpXl_fLG6dbu25nu2nRNA' 
          explanation='YouTube - our channel with event recordings' />
      </div>
    </div>
  );
}

export default Resources;
