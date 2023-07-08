<template>
  <div class="panel blcker">
    <h1>API Terms of Service</h1>
    <h3>Effective date: 2023-07-01</h3>
    <p>
      We welcome all developers to use our API and for use in their apps,
      platforms and services free of charge, as long as they comply with the
      following Terms of Service. Under the paid account, some points in the
      Terms of Service are waived which are noted below.*
    </p>

    <h2>1. Privacy &amp; Security</h2>
    <p>
      1.1. All developers must guard their API keys and authentication details,
      as well as those of their users' privacy with utmost care.
    </p>
    <p>
      1.2. It is forbidden to use API for malicious intent, purposefully cause
      damage to the API, or attempt to gain unauthorized data from or use of
      other accounts.
    </p>

    <h2>2. Transparency</h2>
    <p>2.1. You must obtain your own account for your application.</p>
    <p>
      2.2. You must not misrepresent yourself as The Dog API, The Cat API, or
      resell its services.
    </p>
    <p>
      2.3. To avoid confusion, the title of your app must not include the phrase
      "The Cat API" or "Cat API", "The Dog API" or "Dog API". An exception can
      be made if the phrase is preceded with the word "Unofficial" in the title.
    </p>
    <p>2.4. You must not use the official API logo for your app.</p>

    <h2>3. Advertising &amp; Monetization</h2>
    <p>
      3.1. Developers are allowed to monetize their coding efforts through
      advertising or other legitimate means.
    </p>
    <p>
      3.2. If you decide to monetize your app, you must clearly mention all the
      methods of monetization that are used in your app in all its app store
      descriptions.
    </p>
    <p>
      3.3.a We offer our API free of charge, but if you monetize it, your users
      must be aware of the fact that your app uses The Dog API or The Cat API.
      This fact must be featured prominently in the app's description in the app
      stores and in the in-app intro &amp; about page if your app has it.
    </p>
    <p>
      3.3.b Under the paid account, you are not required to feature The Dog API
      or The Cat API.*
    </p>

    <h2>4. Service</h2>
    <p>
      4.1. By utilizing our services, you acknowledge our commitment to provide
      the highest standards of quality and uninterrupted access to our API,
      while acknowledging that we are unable to provide absolute guarantees in
      this regard.
    </p>

    <h2>5. Breach of terms</h2>
    <p>
      5.1. If your app violates these terms, we will notify the API account
      responsible for the app about the breach of terms.
    </p>
    <p>
      5.2. If you do not update the app to fix the highlighted issues within 10
      days, we will have to discontinue your access to The Dog API and contact
      the app stores about the removal of your apps that are using The Dog API
      or The Cat API in violation of these terms.
    </p>

    <p>
      We reserve the right to expand these terms and guidelines as the need
      arises. We will inform client developers of such changes via an email
      notification.
    </p>
  </div>
</template>

<script>
export default {
  name: "about",
  mounted() {},
};
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
  font-family: "Avenir", Helvetica, Arial, sans-serif;
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
