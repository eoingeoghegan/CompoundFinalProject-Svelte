<!--
This component creates two input fields for a user's name.

firstName and lastName are received as props from a parent component.
$bindable("") allows two-way binding, when the user types in the
inputs the values update both inside this component and in the parent form.
-->
<script lang="ts">

  let { firstName = $bindable(""), lastName = $bindable("") } = $props();
</script>

<div class="columns is-centered">
  <label class="label" for="firstName">Name</label>
  <div class="field is-horizontal">
    <div class="field-body">
      <div class="field">
        <div class="control has-icons-left">
            <input
            bind:value={firstName}
            class="input"
            type="text"
            placeholder="First Name"
            name="firstName"
            />
            <span class="icon is-small is-left">
            <i class="fa fa-id-card"></i>
            </span>
        </div>
      </div>
      <div class="field">
        <div class="control has-icons-left">
            <input
            bind:value={lastName}
            class="input"
            type="text"
            placeholder="Last Name"
            name="lastName"
            />
            <span class="icon is-small is-left">
            <i class="fa fa-id-card"></i>
            </span>
        </div>
       </div>
    </div>
  </div>
</div>

