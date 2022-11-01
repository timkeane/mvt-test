const tokens = {};
const search = document.location.search.substring(1);
const args = search.split('&');
args.forEach(arg => {
  const pair = arg.split('=');
  tokens[pair[0]] = pair[1];
});

export default tokens;
