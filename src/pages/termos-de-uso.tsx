/* eslint-disable react/no-unescaped-entities */
export default function TermosDeUso() {
    return (
        <div className="max-w-[1450px] mx-auto px-6 pt-24 pb-32 flex flex-col gap-24">

            <div className="text-start border-b border-neutral-600 pb-6 md:text-center">
                <h1 className="text-4xl text-neutral-50 font-semibold">
                    Termos de uso
                </h1>
            </div>

            <div className="flex flex-col gap-20">
                <div className="flex flex-col gap-12">
                    <div className="flex flex-col gap-3">
                        <h2 className="text-2xl text-neutral-200 font-medium md:text-3xl">
                            1. Termos
                        </h2>
                        <p className="text-sm text-neutral-400 md:text-base">
                            Ao acessar ao site <a href='https://www.gesolar.com.br/' className="text-sun-500 hover:underline hover:underline-offset-4 hover:decoration-sun-500 transition-colors duration-200">Gesolar</a>, 
                            concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis e concorda que é responsável pelo cumprimento de todas as leis locais 
                            aplicáveis. Se você não concordar com algum                
                            desses termos, está proibido de usar ou acessar este site. Os materiais contidos neste site são protegidos pelas leis de direitos autorais e marcas comerciais aplicáveis.
                        </p>
                    </div>

                    <div className="flex flex-col gap-3">
                        <h2 className="text-2xl text-neutral-200 font-medium md:text-3xl">
                            2. Uso de Licença
                        </h2>

                        <p className="text-sm text-neutral-400 md:text-base">
                            É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site Gesolar, 
                            apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título e,                
                            sob esta licença, você não pode: 
                        </p>

                        <ol className="flex flex-col gap-1 text-sm text-neutral-400 md:text-base list-disc px-5">            
                            <li>modificar ou copiar os materiais;</li>            
                            <li>usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não comercial); </li>            
                            <li>tentar descompilar ou fazer engenharia reversa de qualquer software contido no site Gesolar; </li>            
                            <li>remover quaisquer direitos autorais ou outras notações de propriedade dos materiais; ou  </li>            
                            <li>transferir os materiais para outra pessoa ou 'espelhe' os materiais em qualquer outro servidor.</li>
                        </ol>
                        
                        <p className="text-sm text-neutral-400 md:text-base">
                            Esta licença será automaticamente rescindida se você violar alguma dessas restrições e poderá ser rescindida por Gesolar a qualquer momento. 
                            Ao encerrar a visualização desses materiais ou após o término desta licença, você deve apagar todos os materiais                
                            baixados em sua posse, seja em formato eletrónico ou impresso.
                        </p>
                    </div>

                    <div className="flex flex-col gap-3">
                        <h2 className="text-2xl text-neutral-200 font-medium md:text-3xl">
                            3. Isenção de responsabilidade
                        </h2>
                        
                        <ol className="flex flex-col gap-1 text-sm text-neutral-400 md:text-base list-disc px-5">           
                            <li>Os materiais no site da Gesolar são fornecidos 'como estão'.Gesolar não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização,            
                                adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.</li>            
                            <li>
                                Além disso, o Gesolar não garante ou faz qualquer representação relativa à precisão, aos resultados prováveis ou à confiabilidade do uso dos           
                                materiais em seu site ou de outra forma relacionado a esses materiais ou em sites vinculados a este site.
                            </li>            
                        </ol>
                    </div>
                    
                    <div className="flex flex-col gap-3">
                        <h2 className="text-2xl text-neutral-200 font-medium md:text-3xl">
                        4. Limitações
                        </h2>

                        <p className="text-sm text-neutral-400 md:text-base">
                            Em nenhum caso o Gesolar ou seus fornecedores serão responsáveis por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais em Gesolar,                
                            mesmo que Gesolar ou um representante autorizado da Gesolar tenha sido notificado oralmente ou por escrito da possibilidade de tais danos. Como algumas jurisdições não permitem limitações em garantias implícitas, ou limitações de responsabilidade                
                            por danos conseqüentes ou incidentais, essas limitações podem não se aplicar a você.
                        </p>
                    </div>
                        
                    <div className="flex flex-col gap-3">
                        <h2 className="text-2xl text-neutral-200 font-medium md:text-3xl">
                            5. Precisão dos materiais
                        </h2>

                        <p className="text-sm text-neutral-400 md:text-base">
                            Os materiais exibidos no site da Gesolar podem incluir erros técnicos, tipográficos ou fotográficos. 
                            Gesolar não garante que qualquer material em seu site seja preciso, completo ou atual. Gesolar pode fazer alterações nos materiais contidos em seu                
                            site a qualquer momento, sem aviso prévio. No entanto, Gesolar não se compromete a atualizar os materiais.
                        </p>
                    </div>

                    <div className="flex flex-col gap-3">
                        <h2 className="text-2xl text-neutral-200 font-medium md:text-3xl">
                            6. Links
                        </h2>

                        <p className="text-sm text-neutral-400 md:text-base">
                            O Gesolar não analisou todos os sites vinculados ao seu site e não é responsável pelo conteúdo de nenhum site vinculado. 
                            A inclusão de qualquer link não implica endosso por Gesolar do site. O uso de qualquer site vinculado é por conta e risco do usuário.
                        </p>           
                    </div>
                </div>

                <div className="flex flex-col gap-9">
                    <div className="flex flex-col gap-3">
                        <h3 className="text-xl text-neutral-200 md:text-2xl">
                            Modificações
                        </h3>        

                        <p className="text-xs text-neutral-400 md:text-sm">
                            O Gesolar pode revisar estes termos de serviço do site a qualquer momento, sem aviso prévio. Ao usar este site, 
                            você concorda em ficar vinculado à versão atual desses termos de serviço.
                        </p>
                    </div>      
                    
                    <div className="flex flex-col gap-3">
                        <h3 className="text-xl text-neutral-200 md:text-2xl">
                            Lei aplicável
                        </h3> 

                        <p className="text-xs text-neutral-400 md:text-sm">
                            Estes termos e condições são regidos e interpretados de acordo com as leis do Gesolar e você se submete irrevogavelmente 
                            à jurisdição exclusiva dos tribunais naquele estado ou localidade.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}