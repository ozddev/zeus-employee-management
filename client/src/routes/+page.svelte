<script lang="ts">
	import { Field, Form } from '$lib/form';
	import { Button } from '$lib/button';
	import type { ActionData } from './$types';
</script>

<div>
	<section class="bg-gray-50 dark:bg-gray-900">
		<div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
			<div class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
				<img class="w-50 h-20 mr-1" src="images/Zeus_dunkel-removebg.png" alt="logo" />
				<div>Zeus Dunkel</div>
			</div>
			<div
				class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
			>
				<div class="p-6 space-y-4 md:space-y-6 sm:p-8">
					<h1
						class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
					>
						Sign in to your account
					</h1>
					<Form>
						<Field
							name="email"
							type="email"
							text="Your email"
							placeholder="name@company.com"
							required={true}
						/>
						<Field
							name="password"
							type="password"
							text="Your password"
							placeholder="••••••••"
							required={true}
						/>
						<Button type="submit" text="Sign In" />
					</Form>
				</div>
			</div>
		</div>
	</section>
</div>
