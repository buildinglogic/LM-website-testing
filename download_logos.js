const https = require('https');
const fs = require('fs');

const download = (url, dest) => {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Node/18.0.0' } }, (res) => {
      // Follow redirects
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed to get '${url}' (${res.statusCode})`));
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => file.close(resolve));
      file.on('error', reject);
    }).on('error', reject);
  });
};

async function main() {
  await download('https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg', 'public/images/nvidia-clean.svg');
  await download('https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg', 'public/images/aws-clean.svg');
  await download('https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg', 'public/images/microsoft-clean.svg');
  console.log('Done downloading clean logos');
}
main().catch(console.error);
