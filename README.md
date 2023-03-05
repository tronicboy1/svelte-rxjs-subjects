# About this Project

This is a simple extension of RxJS to make it compatible with Svelte Stores.

You can use these subjects in Svelte's templates to use RxJS's powerful async tooling.

# License

The extensions here are distributed under the MIT license. For licensing on RxJS, please view Microsofts RxJS repository.

# Example

```html
<script lang="ts">
  import { filter, map, mergeMap, sampleTime, switchMap } from "rxjs";
  import { SvelteSubject } from "./svelte-subject";

  let input$ = new SvelteSubject<string>();
  let result$ = input$.pipe(
    sampleTime(500), // 500msの感覚でしか値を取らない、無駄にリクエストを送るのを止める
    map((input) => Number(input)),
    filter((number) => !isNaN(number) && number > 0),
    switchMap((num) => fetch(`https://jsonplaceholder.typicode.com/todos/${num}`)), // switchMapで前のリクエストがまだ終わっていなければキャンセルして新しいリクエストを送る
    filter((response) => response.ok),
    mergeMap((result) => result.json())
  );
</script>

<h1>Todo Search</h1>
<label for="todo-search">Enter Todo Number:</label>
<input id="todo-search" type="number" bind:value="{$input$}" />
{#if $result$}
<article>
  <h1>{$result$.title}</h1>
  {#if $result$.completed}
  <p class="completed">Completed!</p>
  {/if}
</article>
{/if}

<style>
  .completed {
    color: red;
  }
</style>
```
