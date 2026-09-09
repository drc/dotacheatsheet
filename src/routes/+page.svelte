<script>
  export let data

  /** @param {string} value */
  const slugify = (value) => value.toLowerCase().replace(/["']/g, '').replace(/[^a-z0-9]+/g, '-')
</script>

<svelte:head>
  <title>Dota Cheatsheet / {data.hero.name}</title>
  <meta name="description" content={`A fast in-game ${data.hero.name} item reference.`} />
</svelte:head>

<div class="app-shell">
  <main class="layout">
    <aside class="sidebar" aria-label="Favorite heroes">
      <p class="label">FAVORITE HEROES</p>
      {#each data.heroes as hero}
          <a class:selected={data.hero === hero} class="hero-choice" aria-current={data.hero === hero ? 'page' : undefined} href={hero.name === 'Windranger' ? '?' : `?hero=${slugify(hero.name)}`}>
          <img class="hero-icon" src={`/api/images/heroes/${slugify(hero.name)}`} alt="" />
          <span><strong>{hero.name}</strong><small>{hero.role}</small></span>
        </a>
      {/each}
    </aside>

    <section class="content">
      <header class="hero-header">
        <div>
          <p class="label">QUICK REFERENCE</p>
          <h1>{data.hero.name}</h1>
          <p class="tagline">{data.hero.tagline}</p>
        </div>
        <img class="hero-mark" src={`/api/images/heroes/${slugify(data.hero.name)}`} alt={`${data.hero.name} portrait`} />
      </header>

      <div class="columns">
        <section class="panel build-panel">
          <div class="panel-header">
            <div><p class="label">DEFAULT BUILD</p><h2>Buy in order</h2></div>
            <span class="count">7 ITEMS</span>
          </div>
          <div class="build-list">
            {#each data.hero.build as step, index}
              <div class="build-item">
                <span class="number">{index + 1}</span>
                <img class="item-icon {step.item.tone}" src={`/api/images/items/${slugify(step.item.name)}`} alt={step.item.name} />
                <div class="item-name"><strong>{step.item.name}</strong><small>{step.note}</small></div>
              </div>
            {/each}
          </div>
        </section>

        <section class="panel situation-panel">
          <div class="panel-header">
            <div><p class="label orange-label">ONLY IF YOU SEE IT</p><h2>See this? Buy this.</h2></div>
            <span class="count">SWAPS</span>
          </div>
          <div class="situation-list">
            {#each data.hero.situations as situation}
              <div class="situation-row {situation.color}">
                <span class="situation-shape {situation.shape}" aria-hidden="true"></span>
                <div class="trigger"><strong>{situation.trigger}</strong><small>buy this</small></div>
                <span class="arrow">→</span>
                <div class="answer"><img class="item-icon small {situation.item.tone}" src={`/api/images/items/${slugify(situation.item.name)}`} alt={situation.item.name} /><strong>{situation.item.name}</strong></div>
              </div>
            {/each}
          </div>
        </section>
      </div>

      <footer class="pattern">
        <span class="label">FIGHT PATTERN</span>
        {#each data.hero.pattern as step, index}
          {#if index > 0}<b>→</b>{/if}
          <strong>{step}</strong>
        {/each}
      </footer>
    </section>
  </main>
</div>

<style>
  :global(*) { box-sizing: border-box; }
  :global(body) { margin: 0; background: #f4f3ef; color: #1d252b; font-family: Arial, Helvetica, sans-serif; }
  :global(button) { font: inherit; }
  .app-shell { min-height: 100vh; }
  .layout { display: grid; grid-template-columns: 220px minmax(0, 1060px); gap: 44px; max-width: 1400px; margin: 0 auto; padding: 24px 4vw 18px; }
  .sidebar { padding-right: 24px; border-right: 1px solid #d5d3ce; }
  .label { margin: 0 0 9px; color: #777d7d; font-size: 11px; font-weight: 800; letter-spacing: .1em; }
  .hero-choice { width: 100%; display: flex; align-items: center; gap: 12px; padding: 12px; border: 2px solid #d5d3ce; border-radius: 6px; color: #1d252b; background: #fff; text-align: left; text-decoration: none; cursor: pointer; }.hero-choice + .hero-choice { margin-top: 8px; }.hero-choice.selected { border-color: #c56a2e; background: #fff9f4; }
  .hero-icon, .hero-mark { display: grid; place-items: center; color: #fff; background: #c56a2e; font-weight: 800; object-fit: cover; }
  .hero-icon { width: 38px; height: 38px; font-size: 12px; }.hero-choice strong, .hero-choice small { display: block; }.hero-choice strong { font-size: 14px; }.hero-choice small { margin-top: 4px; color: #6e7477; font-size: 11px; }
  .content { min-width: 0; }
  .hero-header { display: flex; align-items: end; justify-content: space-between; padding-bottom: 18px; border-bottom: 1px solid #d5d3ce; }
  h1, h2, p { margin: 0; } h1 { font-size: clamp(48px, 7vw, 82px); line-height: .9; letter-spacing: -.06em; font-weight: 800; } h2 { font-size: 24px; line-height: 1; }
  .tagline { margin-top: 13px; color: #596267; font-size: 16px; }.hero-mark { width: 72px; height: 72px; border-radius: 50%; font-size: 20px; }
  .columns { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-top: 18px; }
  .panel { padding: 18px; border: 1px solid #d5d3ce; border-radius: 8px; background: #fff; }.panel-header { display: flex; justify-content: space-between; align-items: end; margin-bottom: 14px; }.count { color: #898e8e; font-size: 11px; font-weight: 700; letter-spacing: .08em; }.orange-label { color: #c56a2e; }
  .build-list, .situation-list { display: grid; gap: 6px; }.build-item { display: grid; grid-template-columns: 30px 42px 1fr; align-items: center; gap: 10px; min-height: 54px; padding: 5px 8px; border: 1px solid #e0ded9; border-radius: 5px; }.number { display: grid; place-items: center; width: 26px; height: 26px; border-radius: 50%; color: #fff; background: #1d252b; font-size: 14px; font-weight: 800; }.item-icon { display: grid; place-items: center; width: 42px; height: 42px; border-radius: 5px; color: #162027; font-size: 12px; font-weight: 900; object-fit: cover; }.item-icon.small { width: 36px; height: 36px; }.item-icon.gold { background: #e4b448; }.item-icon.blue { background: #75afd0; }.item-icon.red { background: #d5766c; }.item-icon.violet { background: #ad8bd2; }.item-icon.teal { background: #6fc2b4; }.item-icon.orange { background: #e89759; }.item-icon.crimson { background: #c35d62; }.item-icon.slate { background: #aab8bd; }
  .item-name strong, .item-name small { display: block; }.item-name strong { font-size: 16px; }.item-name small { margin-top: 4px; color: #697277; font-size: 12px; }
  .situation-row { --situation-color: #777d7d; display: grid; grid-template-columns: 34px minmax(0, 1fr) 18px minmax(140px, .8fr); align-items: center; gap: 8px; min-height: 58px; padding: 6px 8px 6px 10px; border: 1px solid #d5d3ce; border-left: 6px solid var(--situation-color); border-radius: 5px; }.situation-row.yellow { --situation-color: #a27500; }.situation-row.blue { --situation-color: #23658e; }.situation-row.red { --situation-color: #a6352d; }.situation-row.green { --situation-color: #28734c; }.situation-row.purple { --situation-color: #674095; }
  .situation-shape { width: 32px; height: 32px; background: var(--situation-color); }.circle { border-radius: 50%; }.shield { clip-path: polygon(50% 0, 92% 15%, 84% 72%, 50% 100%, 16% 72%, 8% 15%); }.triangle { clip-path: polygon(50% 0, 100% 100%, 0 100%); }.diamond { transform: rotate(45deg) scale(.72); }.cross { clip-path: polygon(35% 0, 65% 0, 65% 35%, 100% 35%, 100% 65%, 65% 65%, 65% 100%, 35% 100%, 35% 65%, 0 65%, 0 35%, 35% 35%); }.trigger { color: var(--situation-color); }
  .trigger strong, .trigger small { display: block; }.trigger strong { font-size: 14px; }.trigger small { margin-top: 3px; color: #747b7e; font-size: 11px; }.arrow { color: #92999a; font-size: 21px; }.answer { display: flex; align-items: center; gap: 8px; }.answer .item-icon { color: var(--situation-color); background: #f4f3ef; border: 2px solid var(--situation-color); }.answer strong { font-size: 14px; }
  .pattern { display: flex; align-items: center; gap: 12px; margin-top: 14px; padding: 11px 2px 0; border-top: 1px solid #d5d3ce; }.pattern .label { margin: 0 auto 0 0; }.pattern strong { font-size: 13px; }.pattern b { color: #c56a2e; font-size: 18px; }
  @media (max-width: 850px) {
    .layout { display: block; padding: 28px 18px 50px; }.sidebar { padding: 0 0 26px; border: 0; }.hero-choice { max-width: 300px; }.hero-header { padding-bottom: 24px; }.columns { grid-template-columns: 1fr; }.pattern { flex-wrap: wrap; }.pattern .label { flex-basis: 100%; }
  }
</style>
