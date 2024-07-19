import {Button} from "@/components/ui/button.tsx";
import {z} from "zod";
import {Role} from "@/dto/RegisterRequest.ts";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form.tsx";
import {Input} from "@/components/ui/input.tsx";
import {toast} from "@/components/ui/use-toast.ts";
import UserService from "@/service/auth/user.service.ts";
import {ToastAction} from "@/components/ui/toast.tsx";
import {redirect} from "react-router-dom";

// Définir le schéma de validation Zod
const formSchema = z.object({
    firstname: z.string().min(2, {
        message: "Firstname must be at least 2 characters.",
    }),
    lastname: z.string().min(2, {
        message: "Lastname must be at least 2 characters.",
    }),
    email: z.string().email(),
    password: z.string().min(4, {
        message: "Password must be at least 4 characters"
    }),
    role: z.nativeEnum(Role),
    siret: z.string().max(
        9, {
            message: "Siret must be at 9 characters.",
        }
    ).optional(),
});

export function RegisterForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            role: Role.CLIENT,
            siret: "",
        },
    });

    async function onSubmit(data: z.infer<typeof formSchema>) {
        try {
            const resp = await UserService.register(data);
            const json = resp.data;
            console.log(json);
            toast({
                title: "Bienvenue chez MFI !",
                description: (
                    <div>
                        Félicitation votre compte a été créé avec success ✅.
                    </div>
                )
            });
        } catch (err) {
            console.log(err);
            toast({
                variant: "destructive",
                title: "Erreur lors de la soumission!",
                description: (
                    <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                        <code className="text-white">{JSON.stringify(data, null, 2)}</code>
                    </pre>
                ),
                action: <ToastAction onClick={redirect("/register")} altText="Try again">Try again</ToastAction>,
            });
        }


    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
                {/* Champ Firstname */}
                <FormField
                    control={form.control}
                    name="firstname"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Firstname</FormLabel>
                            <FormControl>
                                <Input placeholder="firstname..." {...field} />
                            </FormControl>
                            <FormDescription>
                                min 2 char
                            </FormDescription>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                {/* Champ Lastname */}
                <FormField
                    control={form.control}
                    name="lastname"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Lastname</FormLabel>
                            <FormControl>
                                <Input placeholder="lastname..." {...field} />
                            </FormControl>
                            <FormDescription>
                                min 2 char
                            </FormDescription>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                {/* Champ Email */}
                <FormField
                    control={form.control}
                    name="email"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="email..." {...field} />
                            </FormControl>
                            <FormDescription>
                                Entrez une adresse email valide
                            </FormDescription>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                {/* Champ Password */}
                <FormField
                    control={form.control}
                    name="password"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input type="password" placeholder="password..." {...field} />
                            </FormControl>
                            <FormDescription>
                                min 4 char
                            </FormDescription>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                {/* Champ Role */}
                <FormField
                    control={form.control}
                    name="role"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Role</FormLabel>
                            <FormControl>
                                <select {...field}>
                                    <option value={Role.CLIENT}>Client</option>
                                    <option value={Role.ADMIN}>Admin</option>
                                    <option value={Role.PRODUCER}>Admin</option>
                                </select>
                            </FormControl>
                            <FormDescription>
                                Sélectionnez un rôle
                            </FormDescription>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                {/* Champ Siret */}
                <FormField
                    control={form.control}
                    name="siret"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Siret</FormLabel>
                            <FormControl>
                                <Input placeholder="siret..." {...field} />
                            </FormControl>
                            <FormDescription>
                                Optionnel
                            </FormDescription>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    );
}
