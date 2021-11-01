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
    🪐 mars
    <div
      class="sidebarright-toggle rounded-rect right"
      on:click={() => togglesidebarright("right")}
    >
      &larr;
    </div>

    <div class="sibartext">
      <br />
      <p>
        Mars is the most infamous planet in our solar system when it comes to to
        the human fantasy of space travel. We left our footprints on the surface
        of Mars and I hope to give us a better unterstanding of this by showing
        where what happened.
        <br />
        <b>Author</b>: <img src="/favicon.ico" style="width:8%;" /> kaldera //
        Marco Sciaini
        <br />
        Code can be found <a href="https://github.com/marcosci/mars">here</a>
      </p>
      <div style="font-size: 10px;">
        Icons made by
        <a
          href="https://www.flaticon.com/authors/jesus-chavarria"
          title="Jesus Chavarria">Jesus Chavarria</a
        >
        from
        <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a
        >
      </div>
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
    bottom: 13px;
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

  .sibartext {
    position: absolute;
    top: 20px;
    width: 95%;
    height: 95%;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 12px;
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
    color: #ed5f5e;
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
