<script>
  function toggleSidebar(id) {
    const elem = document.getElementById(id);
    // Add or remove the 'collapsed' CSS class from the sidebar element.
    // Returns boolean "true" or "false" whether 'collapsed' is in the class list.
    const collapsed = elem.classList.toggle("collapsed");
    const padding = {};
    // 'id' is 'right' or 'left'. When run at start, this object looks like: '{left: 300}';
    padding[id] = collapsed ? 0 : 300; // 0 if collapsed, 300 px if not. This matches the width of the sidebars in the .sidebar CSS class.
  }
</script>

<div id="left" class="sidebar flex-center left collapsed">
  <div class="sidebar-content rounded-rect flex-center">
    Left Sidebar
    <div
      class="sidebar-toggle rounded-rect left"
      on:click={() => toggleSidebar("left")}
    >
      &rarr;
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
    bottom: 10px;
  }

  .flex-center.left {
    left: 0px;
  }

  .flex-center.right {
    right: 0px;
  }

  .sidebar-content {
    position: absolute;
    width: 95%;
    height: 95%;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 32px;
    color: gray;
  }

  .sidebar-toggle {
    position: absolute;
    width: 1.3em;
    height: 1.3em;
    overflow: visible;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .sidebar-toggle.left {
    right: -1.5em;
  }

  .sidebar-toggle.right {
    left: -1.5em;
  }

  .sidebar-toggle:hover {
    color: #0aa1cf;
    cursor: pointer;
  }

  .sidebar {
    transition: transform 1s;
    z-index: 1000;
    width: 300px;
    height: 80%;
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
