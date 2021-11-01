<script>
  function togglesidebarright(id) {
    const elem = document.getElementById(id);
    // Add or remove the 'collapsed' CSS class from the sidebarright element.
    // Returns boolean "true" or "false" whether 'collapsed' is in the class list.
    const collapsed = elem.classList.toggle("collapsed");
    const padding = {};
    // 'id' is 'right' or 'left'. When run at start, this object looks like: '{left: 300}';
    padding[id] = collapsed ? 0 : 300; // 0 if collapsed, 300 px if not. This matches the width of the sidebarrights in the .sidebarright CSS class.
  }
</script>

<div id="right" class="sidebarright flex-center right collapsed">
  <div class="sidebarright-content rounded-rect flex-center">
    Credits
    <div
      class="sidebarright-toggle rounded-rect right"
      on:click={() => togglesidebarright("right")}
    >
      &larr;
    </div>
  </div>
</div>

<style>
  .rounded-rect {
    background: white;
    border-radius: 10px;
    box-shadow: 0 0 50px -25px black;
  }

  .flex-center {
    position: absolute;
    display: flex;
    justify-content: center;
    bottom: 30px;
  }

  .flex-center.left {
    left: 0px;
  }

  .flex-center.right {
    right: 0px;
  }

  .sidebarright-content {
    position: absolute;
    width: 95%;
    height: 95%;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 32px;
    color: gray;
  }

  .sidebarright-toggle {
    position: absolute;
    width: 1.3em;
    height: 1.3em;
    overflow: visible;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .sidebarright-toggle.left {
    right: -1.5em;
  }

  .sidebarright-toggle.right {
    left: -1.5em;
  }

  .sidebarright-toggle:hover {
    color: #0aa1cf;
    cursor: pointer;
  }

  .sidebarright {
    transition: transform 1s;
    z-index: 1000;
    width: 300px;
    height: 20%;
  }

  .left.collapsed {
    transform: translateX(-295px);
  }

  .right.collapsed {
    transform: translateX(295px);
  }
  @media screen and (max-width: 600px) {
    #right {
      display: none;
    }
  }
</style>
