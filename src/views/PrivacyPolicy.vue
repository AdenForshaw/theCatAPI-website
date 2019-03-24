<template>
    <div class="panel blcker">
        <br>
        <h2>The Privacy Policy</h2>
        <br>
<h3>1. Sharing data</h3>
<p>We never share your personal data.</p>
<br>
<h3>2. Storing data</h3>
<p>We only store the bare data needed to function properly.</p><br>
<p><strong>Your e-mail address</strong></p>
<p>Your address will only be used:<p>
<p> - to send you your API Key</p>
<p> - to securely authenticate you via the /user/ API method for logging in to the Dashboard</p>
<p> - to authenticate you own the account for any support requests</p>
<p> - to send you a password recovery code if you forget it</p>
<p> - to receive the weekly stats of your account</p>
<p> - You must opt-in to receive the monthly email from me about other open APIs I'm working on - like <a href="http://thecatapi.com/" target="_blank">The Cat API</a></p>
<p>It will never be shared with anyone.</p>
<br>
<p><strong>Uploaded Media</strong></p>
<p>When you upload any images or video, you declare you have the ownership right or permission to do so. You can delete this media at any time via the API.</p>
<p>When your account is closed all your images will be deleted. </p>
<p>If a DMCA takedown request is received by someone else claiming ownership then this may result in your media being deleted. </p>
<p>If it is flagged as inappropriate, or it does not contain contain a Dog or Cat then it will be deleted. There are plenty of image hosting websites for those needs, please use them.</p>
<p>By uploading it you grant theCatAPI a license to analyse it, host it and share it via the API with other users, however - you still own the copyright. </p>
<br>
<p><strong>Sub_id’s</strong></p>
<p>Adding a value for the sub_id parameter to API requests allows you to filter your subsequent API requests by that value, Please do not use any personally identifiable information. Whilst I encrypt it where possible, I can however not be held liable for its protection between you and the API. e.g. if used as a GET parameter it could be seen in transit between your request and our endpoints.</p>
<br>
<p><strong>IP anonymization</strong></p>
<p>The client IP Address is logged on every request to the API. This is used to prevent malicious use of the API such as denial of service attacks, prevent duplication of Votes, and to provide a rough estimate on the city from which the request originates. After 1 month the IP address is anonymized.</p>
<br>
<h3>3. Deleting data</h3>
<br>
<p>If you would like to delete your account, until I add a delete page you can email me personally (Aden@ThatAPIGuy.com) and i will action it. Once actioned there are no backsies, all images and data will be deleted. Please keep your API keys and authentication details secure. I’m sorry, but this is not reversible.</p>
 
        <h2>The Website</h2><br>
<p>While the API does not use cookies or trackers, the website does. These are needed to see which are the most popular pages, and thus which features users are interested in or are having trouble using.</p>
<p>Google Analytics is the only thing that will set a cookie. We have a data processing agreement with google. IP anonymization/masking is enabled. Data sharing is disabled. We are not using any other google services in combination with Google Analytics.</p>
<p>If there is anything you are unclear of or you’d like more information, please send me an email before you sign up.</p>

    </div>
</template>

<script>
    export default {
        name: 'about',
        mounted () {
        }
    }
</script>


<style scoped>
.blcker {
    margin-left: 100px;
    padding-left: 40px;
    width: 80%;
  text-align: left;

  }

  .center {
    float: right;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#content {
  padding-top: 40px;
  padding-bottom: 120px;
}
</style>