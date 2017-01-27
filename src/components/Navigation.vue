<template>
<div class="navigation">
  <h1>Pages</h1>
<ul>
  <li><router-link to="/register"><span>Register</span></router-link></li>
  <li><router-link to="/login"><span>Login</span></router-link></li>
</ul>
</div>
</template>
<script>
export default {
  name: 'navigation'
}
</script>
